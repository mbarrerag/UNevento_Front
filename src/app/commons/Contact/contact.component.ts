import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';

import { FooterComponent } from '../footer/footer.component';


import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule, RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']

})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    const formData = this.contactForm.value;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formsubmit.co/ajax/uneventounal@gmail.com', 
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      { headers: headers }
    ).subscribe(
      response => {
        Swal.fire({
          title: 'Mensaje enviado',
          text: 'Tu mensaje ha sido enviado correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        this.contactForm.reset(); // Opcional: para limpiar el formulario después del envío
      },
      error => {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }
}