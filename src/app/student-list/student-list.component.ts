import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Student, StudentService } from '../student.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { PoupService } from '../poup.service';
import { SucPoupComponent } from '../suc-poup/suc-poup.component';
import { ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NavbarComponent, CommonModule, HttpClientModule, NgxPaginationModule,SucPoupComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: any = [];
  // ✅ current page
  page: number = 1;
  // ✅ items per page
  itemsPerPage: number = 5;
  showLader: any = true;

  //for common poup opning================================

   @ViewChild(SucPoupComponent) popup!: SucPoupComponent;

  constructor(private studentService: StudentService, private router: Router,private poup:PoupService) { }

  ngOnInit() {
    this.getDataOfStudent();
  }

  getDataOfStudent() {
    this.studentService.getStudents().subscribe(
      (data) =>
        (this.students = data));
    this.showLader = false;
  }

  viewDetails(id: number) {
    this.router.navigate(['/student-details', id]);
    console.log(  this.router.navigate(['/student-details', id]));
  //  this.poup.showSuccess(`Opened student #${id}`);  
  }

  // for the common popup opning=====================================================
    ngAfterViewInit(): void {
    this.poup.register(this.popup);
          
  }

}
