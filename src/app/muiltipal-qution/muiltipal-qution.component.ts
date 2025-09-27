import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-muiltipal-qution',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './muiltipal-qution.component.html',
  styleUrl: './muiltipal-qution.component.css'
})
export class MuiltipalQutionComponent {
    @Input() question: string = '';
  @Input() options: string[] = [];
  selectedAnswer: string = '';

}
