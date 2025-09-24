
// poup.service.ts
import { Injectable } from '@angular/core';
import { SucPoupComponent } from './suc-poup/suc-poup.component';

@Injectable({
  providedIn: 'root',
})
export class PoupService {
  private popupComponent?: SucPoupComponent;

  register(popup: SucPoupComponent) {
    this.popupComponent = popup;
  }

  showSuccess(msg: string) {
    this.popupComponent?.showPopup(msg, 'success');
  }

  showError(msg: string) {
    this.popupComponent?.showPopup(msg, 'error');
  }

  showInfo(msg: string) {
    this.popupComponent?.showPopup(msg, 'info');
  }
}


