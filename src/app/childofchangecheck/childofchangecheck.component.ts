import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childofchangecheck',
  standalone: true,
  imports: [],
  templateUrl: './childofchangecheck.component.html',
  styleUrl: './childofchangecheck.component.css',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildofchangecheckComponent implements OnInit {
 @Input() data!: any;

 ngOnInit(): void {
   console.log(this.data);
   
 }

  whenComponentRerendered() {
    console.log('child component rerendered');
  }

  changeValue() {
    this.data.value = 5;
  }
}
