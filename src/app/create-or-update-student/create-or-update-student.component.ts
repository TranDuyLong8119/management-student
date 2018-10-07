import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Student } from '../students';
import { Subject } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
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
  public students = <any>[];

  form = new FormGroup({
    avatar: new FormControl(''),
    id: new FormControl(),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required)
  });

  constructor(
   	private location: Location,
   	private route: ActivatedRoute,
   	private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit() {
   	this.getStudentToDetail();
    this.getStudents();
  }

  getStudentToDetail(): void {
   	const id = +this.route.snapshot.paramMap.get('id');
   	if (id) {
	   	this.studentService.searchStudentsById(id).subscribe(student => {
			this.student = student;
			this.form.patchValue(this.student);
		});
   	}
  }

  getStudents() {
    this.studentService.getStudents().subscribe((resp: any) => {
      this.students = resp.data;
    });
  }

  goBack(): void {
    this.router.navigate(['/list']);
  }

  submittedStudent(student: Student) {
    this.studentService.getAddtedStudent(student);
    this.goBack();
  }
}
