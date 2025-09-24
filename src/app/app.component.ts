import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 showNavbar = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  private setNavbarVisibility(url: string) {
    this.showNavbar = !['/login'].includes(url);
    this.showNavbar=true;
  }
}

