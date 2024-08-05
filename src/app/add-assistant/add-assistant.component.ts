import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { GetParticularEventoService } from './Services/get-particular-evento.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { FooterComponent } from '../commons/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GetCommentsInfo } from './Services/get-comments-info';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-assistant',
  standalone: true,
  imports: [CommonModule,NavbarComponent, FooterComponent, NgIf,FormsModule,NgFor],
  templateUrl: './add-assistant.component.html',
  styleUrls: ['./add-assistant.component.css']
})
export class AddAssistantComponent implements OnInit {
  

  nombreEvento: string = "Nombre del Evento";
  descripcion: string = "Descripción del evento";
  lugar: string = "Lugar del evento";
  categoria: string = "Categoría del evento";
  facultad: string = "Facultad";
  fecha: string = "Fecha del evento";
  maxAsistentes: number = 100;
  hora: string = "Hora del evento";
  tipoEvento: string = "Tipo de Evento";
  IdUsuario: number = parseInt(this.cookieService.get('id') || '0');
  token: string = this.cookieService.get('token') || '';
  imageUrl: string = '';
  eventImage: any = {};
  assisting: boolean = false;
  idEvento: number = 0;
  imgKey: string | null = null; 


  newComment: string="";
  newAnswer: string="";
  comments: any[] = [];
  showResponses: { [key: number]: boolean } = {};
  showReplyForm: { [key: number]: boolean } = {};

  currentPage: number = 1;
  maxCommentsPerPage: number = 15;
  totalPages: number = 0;
  totalElements: number = 0;

  isNextDisabled: boolean = false;
  isPrevDisabled: boolean = true;

  constructor(
    private http: HttpClient,
    private getParticularEventService: GetParticularEventoService,
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private getCommentsInfo: GetCommentsInfo
    
  ) {}

  toggleResponses(commentId: number) {
    this.showResponses[commentId] = !this.showResponses[commentId];
  }

  toggleReplyForm(commentId: number) {
    this.showReplyForm[commentId] = !this.showReplyForm[commentId];
  }



  hayRespuestas(idComentario: number): boolean {
    const comentario = this.comments.find(comment => comment.idComentario === idComentario);
  
    return comentario && comentario.respuestas && comentario.respuestas.length > 0;
  }
  




  addComment() {
    if (this.newComment.trim() === '') {
      Swal.fire('Error', 'El comentario no puede estar vacío', 'error');
      return;
    }
    this.getCommentsInfo.addcomments(this.IdUsuario, this.token, this.idEvento, this.newComment).subscribe(
      (response: any) => {
        console.log('Respuesta al agregar comentario:', response);
  
        if (!response) {
          Swal.fire('Éxito', 'Comentario agregado exitosamente', 'success');
          this.newComment = ''; 
        } else {
          Swal.fire('Error', 'No se pudo agregar el comentario', 'error');
        }
      },
      (error: any) => {
        console.error('Error al agregar comentario:', error);
        Swal.fire('Error', 'No se pudo agregar el comentario', 'error');
      }
    );
  }


  submitReply(commentId: number) {
    console.log("id usuario:", this.IdUsuario);
    console.log("id_comentario:", commentId);
    console.log("Respuesta:", this.newAnswer);
  
    if (this.newAnswer.trim() === "") {
      Swal.fire("Error", "La respuesta no puede estar vacía", "error");
      return;
    }
  
    this.getCommentsInfo.replycomment(commentId, this.token, this.IdUsuario, this.newAnswer).subscribe(
      (response: any) => {
        console.log("Respuesta al agregar comentario:", response);
  
        if (!response) {
          Swal.fire("Éxito", "Respuesta agregada exitosamente", "success");
          this.newAnswer = "";
        } else {
          Swal.fire("Error", "No se pudo agregar la respuesta", "error");
        }
      },
      (error: any) => {
        console.error("Error al agregar comentario:", error);
        Swal.fire("Error", "No se pudo agregar la respuesta", "error");
      }
    );
  }




    ngOnInit()  {

      this.loadComments();
  
      this.imgKey = this.cookieService.get('imagekey'); 
      // Obtener el id del evento a partir de la ruta
      this.route.paramMap.subscribe(params => {
        const idEvento = params.get('idEvento');
        this.idEvento = idEvento ? +idEvento : 0;
      });
  






    this.getParticularEventService.getParticularEvent(this.IdUsuario, this.token, this.idEvento || 57).subscribe(
      (response: any) => {
        console.log(response);
        this.nombreEvento = response.nombre;
        this.descripcion = response.descripcion;
        this.lugar = response.lugar;
        this.categoria = response.categoria.replace(/_/g, ' ');
        this.facultad = response.Facultad.replace(/_/g, ' ');
        this.fecha = (response.fechaEvento.split('T'))[0];
        this.hora = response.hora;
        this.maxAsistentes = response.capacidad;
        this.tipoEvento = response.tipo.replace(/_/g, ' ');
        this.getParticularEventService.getImage(response.imageUrl).subscribe((image: Blob) => {
          const objectUrl = URL.createObjectURL(image);
          this.eventImage = objectUrl;
        });
        this.getParticularEventService.assistingEvent(this.IdUsuario, this.token, this.idEvento || 57).subscribe(
          (response: any) => {
            console.log(response);
            this.assisting = response.asnwer;
          }
        );
      }, () => {
        Swal.fire('Error', 'Parece que este evento no está disponible', 'error');
      }
    );
  }





  asistir(): void {
    Swal.fire({
      title: 'Confirmación Asistencia',
      text: '¿Está seguro que asistirá a este evento?',
      icon: 'info',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      showConfirmButton: true,
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.getParticularEventService.assistEvent(this.IdUsuario, this.token, this.idEvento || 57).subscribe(
          () => {
            Swal.fire({
              title: 'Confirmación Exitosa',
              text: 'Se ha confirmado su asistencia a este evento',
              icon: 'success'
            });
            this.router.navigate(['/myassists']);
            this.assisting = true;
          }
        );
      }
    });
  }

  noAsistir(): void {
    Swal.fire({
      title: 'Anulación Asistencia',
      text: '¿Está seguro que anulará la asistencia a este evento?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      showConfirmButton: true,
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.getParticularEventService.notAssistEvent(this.IdUsuario, this.token, this.idEvento || 57).subscribe(
          () => {
            Swal.fire({
              title: 'Cancelación Exitosa',
              text: 'Se ha cancelado su asistencia a este evento',
              icon: 'success'
            });
            this.router.navigate(['/myassists']);
          }
        );
      }
    });
  }



  loadComments() {
    this.getCommentsInfo.getcomment(this.IdUsuario, this.token, this.idEvento, this.currentPage).subscribe(
      (response: any) => {
        this.comments = response.content ; 

        this.isPrevDisabled = this.currentPage === 1;
        this.isNextDisabled = this.comments.length >= this.maxCommentsPerPage;

        for (let comment of this.comments) {
          this.getCommentsInfo.getImage(comment.usuario.path).subscribe(
            (image: Blob) => {
              const objectUrl = URL.createObjectURL(image);
              comment.usuario.path = objectUrl;
            },
            (imageError: any) => {
              console.error('Error al obtener la imagen del usuario del comentario:', imageError);
            }
          );

          if (comment.respuestas && comment.respuestas.length > 0) {
            for (let respuesta of comment.respuestas) {
              this.getCommentsInfo.getImage(respuesta.getUser.path).subscribe(
                (image: Blob) => {
                  const objectUrl = URL.createObjectURL(image);
                  respuesta.getUser.path = objectUrl;
                },
                (imageError: any) => {
                  console.error('Error al obtener la imagen del usuario en la respuesta:', imageError);
                }
              );
            }
          }
        }

        console.log('Comentarios:', this.comments);
      },
      (error: any) => {
        console.error('Error al obtener comentarios:', error);
      }
    );
  }

  nextPage() {
    if (!this.isNextDisabled) {
      this.currentPage++;
      this.loadComments();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadComments();
    }
  }


}
