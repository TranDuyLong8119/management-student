import { Component, OnInit } from '@angular/core';
import { Student } from '../students';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { StudentService } from '../student.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-listing-student',
  templateUrl: './listing-student.component.html',
  styleUrls: ['./listing-student.component.css']
})

export class ListingStudentComponent implements OnInit {

  public bsModalRef: BsModalRef;
  public students = <any>[];
  public allStudent = <any>[];
  public student: Student;

  constructor(
    private studentService: StudentService,
    private spinner: NgxSpinnerService
  ) { }

  public ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.getStudents();
    }, 1500);
  }

  public getStudents() {
    this.students = this.studentService.getStudents();
    this.allStudent = this.studentService.getStudents();
  }

  public confirmDeleteStudent(selectedStudentIdx) {
    if (confirm('Do you want to delete this student?')) {
      this.students.splice(selectedStudentIdx, 1);
    }
  }

  public searchStudent(chars) {
    this.students = this.allStudent.filter(student => {
      return student.first_name.toUpperCase().includes(chars.toUpperCase())
        || student.last_name.toUpperCase().includes(chars.toUpperCase());
    });
  }
}
