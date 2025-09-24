
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
}

@Injectable({ providedIn: 'root' })

export class StudentService {
 private url = 'http://localhost:3000/students';
 private datainfo="http://localhost:3000/courseDescriptions"

  constructor(private http: HttpClient) {}

  // ✅ Fetch all students from the JSON server
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  // ✅ Fetch a single student by ID from the JSON server
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.url}/${id}`);
  }

getCourseDescription(): Observable<any[]> {
  return this.http.get<any[]>(this.datainfo); // ✅ no backticks or quotes
}

}
