// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Importa todos tus componentes
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotesComponent } from './components/notes/notes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    //RouterOutlet,
    HeaderComponent,
    ServicesComponent,
    ExperienceComponent,
    PortfolioComponent,
    TestimonialComponent,
    FooterComponent,
    NotesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Duwy | Product Designer Portfolio';
}
