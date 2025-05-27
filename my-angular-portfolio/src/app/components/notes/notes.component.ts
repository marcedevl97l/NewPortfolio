// src/app/components/notes/notes.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Si usas *ngFor o *ngIf dentro

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  notesPlatforms = [
    {
      name: 'Notion',
      icon: 'fab fa-notion',
      description:
        'Centralized knowledge hub for project management, documentation, and personal notes. Interconnected ideas and collaborative workspaces.',
      link: 'https://www.notion.so/your-notion-page-link',
    },
    {
      name: 'Obsidian',
      icon: 'fas fa-brain',
      description:
        'Personal knowledge base with a focus on linked markdown files. Create your own "second brain" with graph view and powerful search.',
      link: 'https://obsidian.md/',
    },
    {
      name: 'Future Brain',
      icon: 'fas fa-gem',
      description:
        'Concept for a future AI-powered note-taking system. Predictive insights, automated summarization, and neural network organization.',
      link: '#',
    }, // Enlace ficticio
  ];
}
