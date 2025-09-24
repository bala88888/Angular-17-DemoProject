import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   username = '';
  password = '';
  error = '';
  constructor(private router: Router) {}

  login() {

    if (this.username === 'bala' && this.password === 'bala') {
      this.router.navigate(['/students']);
    } else {
      this.error = 'Invalid username or password';
    }
  }

}
