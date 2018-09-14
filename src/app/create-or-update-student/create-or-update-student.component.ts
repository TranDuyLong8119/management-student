import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Student } from '../students';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-create-or-update-student',
  templateUrl: './create-or-update-student.component.html',
  styleUrls: ['./create-or-update-student.component.css']
})
export class CreateOrUpdateStudentComponent implements OnInit {

  form = new FormGroup({
    avatar: new FormControl(''),
    id: new FormControl({value:''}, Validators.required),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required)
  });

  allStudent = <any>[];
  student = <any>{};

  constructor(
  	private location: Location,
  	private route: ActivatedRoute,
  	private studentService: StudentService
  ) {}

  ngOnInit() {
  	this.getStudents();
  	this.getStudentToDetail();
  	if (this.student) {
  		debugger;
  		this.form.patchValue(this.student);
  	}
  }

  getStudents() {
  	this.studentService.getStudents().subscribe((resp: any) => {
  	  console.log(resp);
      this.allStudent = resp.data;
    });
  }

  searchStudentsById(id: number): Observable<Student> {
    return of(this.allStudent.find(student => student.id === id));
  }

  getStudentToDetail(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.student = this.searchStudentsById(id);
  	console.log(this.student);
  }

  goBack(): void {
    this.location.back();
  }
}
