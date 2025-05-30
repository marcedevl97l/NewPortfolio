import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactMethods = [
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      link: 'mailto:tu@email.com',
      description: 'Envíame un correo electrónico'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      link: 'https://linkedin.com/in/tu-perfil',
      description: 'Conecta conmigo en LinkedIn'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      link: 'https://github.com/tu-usuario',
      description: 'Revisa mis proyectos en GitHub'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      link: 'https://twitter.com/tu-usuario',
      description: 'Sígueme en Twitter'
    }
  ];
} 