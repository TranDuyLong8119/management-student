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

  student = <any>{};
  edittedStudent = {};

  form = new FormGroup({
    avatar: new FormControl(''),
    id: new FormControl(),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required)
  });

  constructor(
   	private location: Location,
   	private route: ActivatedRoute,
   	private studentService: StudentService
  ) {}

  ngOnInit() {
   	this.getStudentToDetail();
   	if (this.student) {
   		this.form.patchValue(this.student);
   	}
    this.studentService.cerrentStudent.subscribe(value => this.edittedStudent = value);
  }

  getStudentToDetail(): void {
   	const id = +this.route.snapshot.paramMap.get('id');
   	this.studentService.searchStudentsById(id).subscribe(student => this.student = student);
  }

  goBack(): void {
    this.location.back();
  }

  submittedStudent(edittedStudent: Student) {
     this.studentService.getEdittedStudent(edittedStudent);
  }
}
