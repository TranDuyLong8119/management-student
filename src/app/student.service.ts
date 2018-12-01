import { Injectable, EventEmitter } from '@angular/core';
import { Student } from './students';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { STUDENTS } from './listing-student';
import { debug } from 'util';

@Injectable({
	providedIn: 'root'
})

export class StudentService {

	// public getStudentURL = 'https://reqres.in/api/users?page=2';
	// public postStudentURL = 'https://reqres.in/api/users';
	public student = new Subject<any>();
	// public student$ = this.student.asObservable();

	constructor() { }

	// public getStudents(): Observable<Student[]> {
	// 	return this.http.get<Student[]>(this.getStudentURL);
	// }

	public getStudents(): Student[] {
		return STUDENTS;
	}

	public searchStudentsById(id: number): Observable<Student> {
		return of(STUDENTS.find(student => student.id === id));
	}

	public saveStudent(student): void {
		if (student && student.id) {
			for (let i = 0; i < STUDENTS.length; i++) {
				if ((student.id) === STUDENTS[i].id) {
					STUDENTS[i] = student;
				}
			}
		} else if (student && !student.id) {
			student.id = STUDENTS[STUDENTS.length - 1].id + 1;
			STUDENTS.push(student);
		}
	}

	// public addStudent(student: Student): Observable<Student> {
	// 	return this.http.post<Student>(this.postStudentURL, student);
	// }
}
