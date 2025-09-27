import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-text-qution',
  standalone: true,
  imports: [],
  templateUrl: './text-qution.component.html',
  styleUrl: './text-qution.component.css'
})
export class TextQutionComponent {
  @Input() question: string = '';
  answer: string = '';

}
