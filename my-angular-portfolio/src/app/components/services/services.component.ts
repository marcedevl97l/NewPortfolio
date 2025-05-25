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
      title: 'Social Ads',
      description:
        'Attract new customers by running paid campaigns on social media.',
    },
    {
      title: 'Search Engineer',
      description:
        'Boost your online visibility and organic traffic with tailored SEO strategies.',
    },
    {
      title: 'Content Marketing',
      description:
        'Create engaging and valuable content that attracts and retains your audience.',
    },
    {
      title: 'SaaS Marketing',
      description:
        'Drive growth for your SaaS product with targeted marketing strategies.',
    },
  ];
}
