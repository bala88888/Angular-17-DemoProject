import {
  Injectable,
  ViewContainerRef,
  ComponentRef
} from '@angular/core';
import { TextQutionComponent } from './text-qution/text-qution.component';
import { MuiltipalQutionComponent } from './muiltipal-qution/muiltipal-qution.component';
import { DropdwonComponent } from './dropdwon/dropdwon.component';

@Injectable({
  providedIn: 'root'
})
export class SurveyServiceService {
  private containerRef!: ViewContainerRef;

  constructor() {}

  // Setter to receive the container from the component
  setContainer(container: ViewContainerRef) {
    this.containerRef = container;
  }

  loadQuestion( type: 'text' | 'multiple' | 'dropdown',question: string,options: string[] = []) {
    
    this.containerRef.clear();
    let componentRef: ComponentRef<any>;
    
    if (type === 'text') {
      componentRef = this.containerRef.createComponent(TextQutionComponent);
    } else if (type === 'multiple') {
      componentRef = this.containerRef.createComponent(MuiltipalQutionComponent);
    } else {
      componentRef = this.containerRef.createComponent(DropdwonComponent);
    }

    componentRef.instance.question = question;

    if (options.length) {
      componentRef.instance.options = options;
    }
  }
}

