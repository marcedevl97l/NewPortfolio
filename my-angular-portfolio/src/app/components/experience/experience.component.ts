// src/app/components/experience/experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experienceItems = [
    {
      title: 'Graphic Designer at Dewa-Dewi Tech',
      years: '2015–2017',
      description:
        'Focused on creating compelling visual assets for various digital platforms.',
    },
    {
      title: 'UI/UX Designer at Odama Studio',
      years: '2017–2019',
      description:
        'Designed user interfaces and experiences for web and mobile applications.',
    },
    {
      title: 'UX Researcher at Korsa Studio',
      years: '2018–2021',
      description:
        'Conducted user research to understand user behaviors and needs, informing design decisions.',
    },
    {
      title: 'Product Designer at Apple Inc',
      years: '2021–Now',
      description:
        'Currently working on innovative product designs for cutting-edge technology solutions.',
    },
  ];
}
