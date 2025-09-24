import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'student-details/:id', component: StudentDetailsComponent },
  { path: '**', redirectTo: 'login' },
];
