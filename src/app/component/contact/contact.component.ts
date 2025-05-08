import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ height: '0px', opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out'),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ height: '0px', opacity: 0, transform: 'translateY(-20px)' })),
      ]),
    ]),
  ],
})
export class ContactComponent {
  isFormVisible = false;

  toggleContactForm(): void {
    this.isFormVisible = !this.isFormVisible;
  }
}
