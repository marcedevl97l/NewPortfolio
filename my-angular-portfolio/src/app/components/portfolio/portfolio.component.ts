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
      src: '../assets/images/webdesigncard1.png',
      alt: 'Web Design Project',
      title: 'Web Design for Startup',
      description:
        'Crafting a clean and intuitive web interface for a new tech startup, focusing on user experience and conversion optimization.',
      tags: ['Web Design', 'UI/UX'],
    },
    {
      src: '../assets/images/webdesigncard2.png',
      alt: 'Mobile App Project',
      title: 'Mobile App for Recipes',
      description:
        'Developing a user-friendly mobile application for iOS and Android, allowing users to discover, save, and share personalized recipes.',
      tags: ['Mobile App', 'UI/UX'],
    },
    {
      src: '../assets/images/webdesigncard3.png',
      alt: 'Dashboard Project',
      title: 'Analytics Dashboard',
      description:
        'Implementing an interactive dashboard for visualizing marketing data, empowering businesses to make data-driven decisions.',
      tags: ['Dashboard', 'Data Visualization'],
    },
    // Añade más proyectos según tu imagen
    {
      src: '../assets/images/webdesigncard4.png',
      alt: 'Project 4',
      title: 'E-commerce Redesign',
      description:
        'A complete visual and functional overhaul of an existing e-commerce platform to improve sales and user engagement.',
      tags: ['E-commerce', 'Redesign'],
    },
    {
      src: '../assets/images/webdesigncard5.png',
      alt: 'Project 5',
      title: 'Brand Identity',
      description:
        'Developing a comprehensive brand identity system, including logo, typography, and color palette, for a new sustainable brand.',
      tags: ['Branding', 'Graphic Design'],
    },
    {
      src: '../assets/images/webdesigncard6.png',
      alt: 'Project 6',
      title: 'SaaS Onboarding Flow',
      description:
        'Designing an engaging and intuitive onboarding experience for a new SaaS product, minimizing friction and improving user retention.',
      tags: ['SaaS', 'UX Flow'],
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
