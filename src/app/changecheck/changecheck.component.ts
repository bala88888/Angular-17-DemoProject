import { Component } from '@angular/core';
import { ChildofchangecheckComponent } from '../childofchangecheck/childofchangecheck.component';

@Component({
  selector: 'app-changecheck',
  standalone: true,
  imports:[ChildofchangecheckComponent],
  templateUrl: './changecheck.component.html',
  styleUrl: './changecheck.component.css'
})
export class ChangecheckComponent {
  // data = { value: 1 };

data: any = { value: 1 }; // initial value

updateData() {
  this.data = { ...this.data, value: 5 }; // ✅ correct

}
valueChange() {
  this.data = { ...this.data, value: 5 };
  }

}
