// src/app/components/services/services.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  serviceItems = [
    {
      title: 'Social Media Marketing',
      description:
        'Atraiga nuevos clientes ejecutando campañas creativas en las redes sociales.',
    },
    {
      title: 'Search Engineer',
      description:
        'Aumente su visibilidad en línea y su tráfico orgánico con estrategias SEO personalizadas.',
    },
    {
      title: 'Content Marketing',
      description:
        'Cree contenido atractivo y valioso que atraiga y retenga a su audiencia..',
    },
    {
      title: 'SaaS Marketing',
      description:
        'Impulse el crecimiento de su producto SaaS con estrategias de marketing específicas.',
    },
  ];
}
