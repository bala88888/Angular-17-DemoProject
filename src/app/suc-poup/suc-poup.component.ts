import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-suc-poup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suc-poup.component.html',
  styleUrl: './suc-poup.component.css'
})
export class SucPoupComponent {

  show = false;
  message = '';
  type: 'success' | 'error' | 'info' = 'info';

  showPopup(msg: string, type: 'success' | 'error' | 'info' = 'info') {
    this.message = msg;
    this.type = type;
    this.show = true;

    setTimeout(() => {
      this.show = false;
    }, 7000); // auto-hide after 3 seconds
  }

  getCancel(){
     this.show = false;
  }

}
