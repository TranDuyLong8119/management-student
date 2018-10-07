import { Injectable, EventEmitter } from '@angular/core';
import { Student } from './students';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { STUDENTS } from './listing-student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

	// public students = <any>[];
	public getStudentURL = 'https://reqres.in/api/users?page=2';
	public postStudentURL = 'https://reqres.in/api/users';

	student = new Subject<any>();
	student$ = this.student.asObservable();

	constructor(private http: HttpClient) {}

	getStudents(): Observable<Student[]> {
		return this.http.get<Student[]>(this.getStudentURL);
	}

	searchStudentsById(id: number): Observable<Student> {
 		return of(STUDENTS.find(student => student.id === id));
	}

	// saveStudent(student: Student): void {
	// 	if (student && student.id ) {
	// 		for (let i = 0; i < this.students.length; i++) {
	// 			if ((student.id) === this.students[i].id) {
	// 				this.students[i] = student;
	// 			}
	// 		}
	// 	} else {
	// 		student.id = this.students[this.students.length - 1].id + 1;
	// 		this.students.push(student);
	// 	}
	// }

	getAddtedStudent(student: Student) {
		if (student) {
			this.student.next(student);
		}
	}

	addStudent(student: Student): Observable<Student> {
		return this.http.post<Student>(this.postStudentURL, student);
	}
}
