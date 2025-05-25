// src/app/components/testimonial/testimonial.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent {
  testimonial = {
    quote:
      "Without Journey Commerce, we would never have been able to implement this system ourselves. They have a great team and they are always enough hours in the day to make sure we make our goals. I can't recommend them highly enough, you're in great hands.",
    author: 'Dhimmo Reijnder',
    title: 'Founder',
  };
}
