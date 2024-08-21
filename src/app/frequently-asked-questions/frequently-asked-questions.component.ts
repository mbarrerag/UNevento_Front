import { Component } from '@angular/core';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { FooterComponent } from '../commons/footer/footer.component';
import { NgFor, NgClass, NgIf } from '@angular/common';

interface FAQ {
  question: string;
  answer: string[];
}

@Component({
  selector: 'app-frequently-asked-questions',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, NgFor, NgClass, NgIf],
  templateUrl: './frequently-asked-questions.component.html',
  styleUrl: './frequently-asked-questions.component.css'
})
export class FrequentlyAskedQuestionsComponent {
  faqs: FAQ[] = [
    {
      question: '¿Por qué no puedo registrarme en UNevento?',
      answer: [
        'Verifica que hayas ingresado todos los campos que se te solicitan a la hora de Registrarte y que además hayas aceptados los términos y condiciones.',
        'Comprueba que no estés ingresando palabras ofensivas en los campos de Nombre o Apellido. Recuerda que en UNevento promovemos la convivencia y el respeto entre los usuarios de la plataforma.',
        'Verifica que la dirección de correo electrónico que estás ingresando sea válida y que no esté asociada a otra cuenta en la plataforma.',
        'Valida que la contraseña que estás ingresando cumpla con los requisitos de seguridad establecidos por la plataforma. La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.',
        'Confirma que al volver a ingresar la contraseña, ambas coincidan.',
        'Revisa que estés ingresando correctamente el código de verificación que se te envía al correo electrónico.',
        'Si después de realizar estos pasos sigues teniendo problemas para registrarte, te recomendamos intentar en otro momento o contactar al soporte técnico de la plataforma a través del apartado de Contáctanos.'      
      ]
    },
    {
      question: '¿Cómo puedo crear un evento en UNevento?',
      answer: [
        'Ingresa a la página de inicio de UNevento.',
        'Inicia sesión en tu cuenta.',
        'Selecciona la opción "Crear Evento" en la esquina superior derecha de la pantalla o dirígete al enlace "Crear Evento".',
        'Completa el formulario de creación de evento con la información solicitada.',
        'Ingresa el nombre, descripción, fecha, hora, ubicación, categoría y una breve descripción del evento.',
        'Selecciona la opción "Crear Evento".',
        'Si los datos se ingresaron correctamente, el evento será creado y se mostrará en la lista de eventos de la plataforma.'
      ]
    },
    {
      question: '¿Por qué no puedo crear un Evento?',
      answer: [
        'En primer lugar debes verificar que estes logueado en la plataforma.',
        'En segundo lugar verifica que hayas rellenado todos los campos asociados a la Información del Evento. Recuerda, ¡No puede haber Campos Vacíos!',
        'En tercer lugar verifica que no hayas ingresado palabras ofensivas dentro de los campos del evento. Recuerda que en UNevento promovemos la convivencia y el respeto entre los usuarios de la plataforma.',
        'En cuarto lugar verifica que no hayas ingresado fechas pasadas, ya que no se pueden crear eventos en el pasado.',
        'En quinto lugar verifica que la imagen que subiste sea de un formato válido y que no pese más de 5MB.',
        'Si los anteriores pasos no fueron útiles, lo más probable sea que ya hayas alcanzado el límite de eventos permitidos en tu cuenta. Para poder crear más eventos, debes adquirir un Plan Superior al Actual.',
      ]
    },
    {
      question: '¿Cuáles son los requisitos para crear un evento en UNevento?',
      answer: [
        'Tener una cuenta registrada en UNevento.',
        'Proporcionar información verídica y actualizada sobre el evento.',
        'Cumplir con los límites de caracteres para el nombre, descripción y lugar del evento.',
        'Seleccionar una categoría para el evento.',
        'Ingresar una fecha y hora válidas.',
        'Elegir una imagen representativa de buena calidad y que cumpla con el tamaño máximo permitido.',
        'En el caso de eventos de facultad, seleccionar una opción en el campo de Facultad.'
      ]
    },
    {
      question: '¿Cómo puedo editar un evento que ya he creado?',
      answer: [
        'Ingresa a la página de inicio de UNevento.',
        'Inicia sesión en tu cuenta.',
        'Selecciona la opción "Mis Eventos" en la esquina superior derecha de la pantalla o dirígete al enlace "Mis Eventos".',
        'Selecciona el evento que deseas editar.',
        'Selecciona la opción "Editar Evento".',
        'Realiza los cambios deseados en el nombre, descripción, fecha, hora, ubicación, categoría o imagen representativa del evento.',
        'Guarda los cambios realizados.'
      ]
    },
    {
      question: '¿Cómo puedo eliminar un evento que he creado en UNevento?',
      answer: [
        'Ingresa a la página de inicio de UNevento.',
        'Inicia sesión en tu cuenta.',
        'Selecciona la opción "Mis Eventos" en la esquina superior derecha de la pantalla o dirígete al enlace "Mis Eventos".',
        'Selecciona el evento que deseas eliminar.',
        'Selecciona la opción "Eliminar Evento".',
        'Confirma tu decisión y haz clic en "Confirmar".'
      ]
    },
    {
      question: '¿Cómo puedo ver los eventos a los que he asistido en UNevento?',
      answer: [
        'Ingresa a la página de inicio de UNevento.',
        'Inicia sesión en tu cuenta.',
        'Selecciona la opción "Mis Asistencias" en la esquina superior derecha de la pantalla o dirígete al enlace "Mis Asistencias".',
        'Se abrirá una lista con los eventos a los que has asistido.',
        'Podrás ver la información de los eventos y acceder a un mayor detalle haciendo clic sobre el evento de interés.'
      ]
    },
    {
      question: '¿Por qué no puedo ver un evento que había observado anteriormente en UNevento?',
      answer: [
        'El evento ya ha ocurrido, por lo tanto este ya no se mostrará dentro de la plataforma.',
        'El evento ha sido ocultado por el administrador, debido a que mostraba información confusa u ofensiva.',
        'Si consideras que el evento debería seguir mostrándose, te recomendamos contactar al soporte técnico de la plataforma a través del apartado de Contáctanos.'
      ]
    },
    {
      question: '¿Cuáles son los planes premium disponibles en UNevento?',
      answer: [
        'Plan Básico: $7.500 COP',
        'Plan Mediano: $15.000 COP',
        'Plan Premium: $25.000 COP'
      ]
    },
    {
      question: '¿Cómo puedo adquirir un plan premium en UNevento?',
      answer: [
        'Ingresa a la página de inicio de UNevento.',
        'Inicia sesión en tu cuenta.',
        'Selecciona la opción "Planes Premium" en la esquina superior derecha de la pantalla o dirígete al enlace "Planes Premium".',
        'Selecciona el plan que deseas adquirir.',
        'Selecciona la opción "Adquirir Plan".',
        'Completa los datos para realizar el pago.',
        'Selecciona la opción "Pagar".'
      ]
    },
    {
      question: '¿Cómo puedo restablecer mi contraseña si la olvidé?',
      answer: [
        'Ingresa a la página de inicio de UNevento.',
        'Selecciona la opción "Iniciar Sesión" en la esquina superior derecha de la pantalla.',
        'Haz clic en la opción "¿Olvidaste tu contraseña?" debajo del botón "Iniciar Sesión".',
        'Ingresa la dirección de correo electrónico asociada a tu cuenta.',
        'Haz clic en el botón "Recuperar Contraseña".',
        'Se te enviará un correo electrónico con un código de verificación.',
        'Ingresa el código en la nueva ventana que se despliega.',
        'Ingresa y confirma tu nueva contraseña.',
        'Haz clic en el botón "Restablecer Contraseña".'
      ]
    },
    {
      question: '¿Cómo puedo editar mi perfil en UNevento?',
      answer: [
        'Ingresa a la página de inicio de UNevento.',
        'Inicia sesión en tu cuenta.',
        'Selecciona la opción "Mi Perfil" en la esquina superior derecha de la pantalla.',
        'Selecciona la opción "Editar Perfil".',
        'Realiza los cambios que desees en tu perfil, como nombre, apellido o imagen de perfil.',
        'Guarda los cambios realizados.'
      ]
    },
    {
      question: '¿Cómo puedo eliminar mi cuenta en UNevento?',
      answer: [
        'Ingresa a la página de inicio de UNevento.',
        'Inicia sesión en tu cuenta.',
        'Selecciona la opción "Mi Perfil" en la esquina superior derecha de la pantalla.',
        'Selecciona la opción "Eliminar Cuenta".',
        'Se abrirá un cuadro de diálogo de advertencia para confirmar la eliminación de tu cuenta.',
        'Si estás seguro de eliminar tu cuenta, haz clic en el botón "Sí, eliminar".',
        'Recuerda que una vez eliminada tu cuenta, no podrás recuperar la información ni los eventos que hayas creado. Si deseas utilizar la plataforma nuevamente, deberás registrarte de nuevo.'
      ]
    },
    {
      question: '¿Cómo puedo promocionar mi evento en UNevento?',
      answer: [
        'Ingresa a la página de inicio de UNevento.',
        'Inicia sesión en tu cuenta.',
        'Selecciona la opción "Mis Eventos" en la esquina superior derecha de la pantalla.',
        'Selecciona el evento que deseas promocionar.',
        'Selecciona la opción "Promocionar Evento".',
        'Realiza el pago correspondiente utilizando una tarjeta de crédito o a través de tu cuenta de MercadoPago.',
        'Una vez realizado el pago, recibirás una confirmación por correo electrónico y tu evento se destacará en la plataforma.'
      ]
    },
    {
      question: '¿Cómo puedo ver la lista de asistentes a mi evento en UNevento?',
      answer: [
        'Ingresa a la página de inicio de UNevento.',
        'Inicia sesión en tu cuenta.',
        'Selecciona la opción "Mis Eventos" en la esquina superior derecha de la pantalla.',
        'Selecciona el evento del cual deseas ver los asistentes.',
        'Selecciona la opción "Asistentes".',
        'Se mostrará una lista con los nombres de los asistentes al evento.',
        'Si deseas, puedes descargar la lista de asistentes en formato Excel.'
      ]
    },
    {
      question: '¿Por qué no puedo cambiar mi foto de perfil en UNevento?',
      answer: [
        'Seguramente sea porque no cuentas con un Plan activo en tu cuenta. Recuerda que para poder cambiar tu foto de perfil, tu cuenta debe tener un Plan Básico o Superior activo.',
        'Si ya cuentas con un plan activo, debes verificar que la imagen que el peso de la imagen que estás tratando de subir no sea superior a 5 MB.',
      ]
    }
  ];

  expandedIndex: number | null = null;

  toggleAnswer(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
