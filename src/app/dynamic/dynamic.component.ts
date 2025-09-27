import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { SurveyServiceService } from '../survey-service.service';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent implements AfterViewInit{
  
   @ViewChild('surveyContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private surveyService:SurveyServiceService) {}

  ngAfterViewInit(): void {
    this.surveyService.setContainer(this.container);
  }

  loadTextQuestion() {
    this.surveyService.loadQuestion('text', 'What is your favourite color?');
  }

  loadMultipleChoice() {
    this.surveyService.loadQuestion('multiple', 'Which languages do you speak?', ['english', 'spanish']);
  }

  loadDropdown() {
    this.surveyService.loadQuestion('dropdown', 'Select your country', ['USA', 'Canada', 'UK']);
  }
}

