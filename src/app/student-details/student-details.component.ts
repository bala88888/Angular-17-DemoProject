import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {
  studentId!: any;
  studentInfo: any = []
  courseInfo: any = [];
  matchedCourse:any=[];
  courseData:any
  constructor(private activateRoute: ActivatedRoute, private studentservice: StudentService, private router: Router) {

  }

  ngOnInit(): void {
    this.getStudentinfo();
  }

  getStudentinfo() {
    // Step 1: Get 'id' from route
    const idParam = this.activateRoute.snapshot.paramMap.get('id');
    const studentId = idParam ? +idParam : 0;
    console.log('Route ID:', studentId);

    // Step 2: Get students from service
    this.studentservice.getStudents().subscribe((students: any) => {
      console.log('All Students:', students);

      // Step 3: Filter student by ID
      const matchedStudent = students.find((student: any) => student.id == studentId);

      if (matchedStudent) {

        this.studentInfo = matchedStudent;

        console.log(this.studentInfo)
        console.log('Matched Student:', this.studentInfo);
      } else {
        console.warn('No student found with ID:', studentId);
      }
    });
  }

  getDataInfo() {
    this.router.navigate(['/students']);
  }

  getMoreData() {
    this.studentservice.getCourseDescription().subscribe((k: any) => {
      console.log(k);
      this.courseInfo = k;
      this.courseInfo.find((info: any) => {
        console.log(info);
        const courseArray = Object.entries(info);
        console.log(this.studentInfo.course);
         this.matchedCourse = courseArray.find(
          ([key, value]) => key == this.studentInfo.course
        ) ;
        console.log(this.matchedCourse[1]);
        this.courseData=this.matchedCourse[1];
      });
    })
  }



}







