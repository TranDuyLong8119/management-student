import { Injectable } from '@angular/core';
import { Student } from './students';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { STUDENTS } from './listing-student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 constructor(private http: HttpClient) { }

 getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('https://reqres.in/api/users?page=2');
 }

 searchStudentsById(id: number): Observable<Student> {
    return of(STUDENTS.find(student => student.id === id));
 }
 
}
