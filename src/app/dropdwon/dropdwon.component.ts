import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdwon',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dropdwon.component.html',
  styleUrl: './dropdwon.component.css'
})
export class DropdwonComponent {
  @Input() question: string = '';
  @Input() options: string[] = [];

  selectedOption: string = '';
}
