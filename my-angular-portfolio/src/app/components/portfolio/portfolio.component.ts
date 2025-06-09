// src/app/components/portfolio/portfolio.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('cardHover', [
      state(
        'initial',
        style({
          transform: 'scale(1)',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        })
      ),
      state(
        'hovered',
        style({
          transform: 'scale(1.03)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
        })
      ),
      transition('initial <=> hovered', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class PortfolioComponent {
  projects = [
    {
      src: '../assets/images/phonecover.jpeg',
      alt: 'Proyecto de Diseño Web',
      title: 'Desarrollo de Aplicaciones Móviles',
      description:
        'Creación de una interfaz web limpia e intuitiva para una nueva startup tecnológica, enfocada en la experiencia del usuario y la optimización de conversiones.',
      tags: ['Diseño Web', 'UI/UX'],
    },
    {
      src: '../assets/images/phonelaptopcover.jpg',
      alt: 'Proyecto de App Móvil',
      title: 'Aplicación Móvil de Recetas',
      description:
        'Desarrollo de una aplicación móvil fácil de usar para iOS y Android, que permite a los usuarios descubrir, guardar y compartir recetas personalizadas.',
      tags: ['App Móvil', 'UI/UX'],
    },
    {
      src: '../assets/images/laptopcover.jpg',
      alt: 'Proyecto de Dashboard',
      title: 'Panel de Analíticas',
      description:
        'Implementación de un panel interactivo para visualizar datos de marketing, permitiendo a las empresas tomar decisiones basadas en datos.',
      tags: ['Dashboard', 'Visualización de Datos'],
    },
    {
      src: '../assets/images/autocover.jpg',
      alt: 'Proyecto 4',
      title: 'Automatización Inteligente',
      description:
        'Reforma visual y funcional completa de una plataforma de comercio electrónico existente para mejorar las ventas y la interacción de los usuarios.',
      tags: ['E-commerce', 'Rediseño'],
    },
    {
      src: '../assets/images/pccover.jpg',
      alt: 'Proyecto 5',
      title: 'Identidad de Marca',
      description:
        'Desarrollo de un sistema integral de identidad de marca, incluyendo logotipo, tipografía y paleta de colores, para una nueva marca sostenible.',
      tags: ['Branding', 'Diseño Gráfico'],
    },
    {
      src: '../assets/images/iphonecover.jpg',
      alt: 'Proyecto 6',
      title: 'Flujo de Onboarding para SaaS',
      description:
        'Diseño de una experiencia de onboarding atractiva e intuitiva para un nuevo producto SaaS, minimizando la fricción y mejorando la retención de usuarios.',
      tags: ['SaaS', 'Flujo UX'],
    },
  ];

  hoverStates: { [key: number]: string } = {};

  constructor() {
    this.projects.forEach((_, index) => {
      this.hoverStates[index] = 'initial';
    });
  }

  onCardEnter(index: number) {
    this.hoverStates[index] = 'hovered';
  }

  onCardLeave(index: number) {
    this.hoverStates[index] = 'initial';
  }
}
