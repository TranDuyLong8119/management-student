import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../students';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { StudentService } from '../student.service';
import { STUDENTS } from '../listing-student';

@Component({
  selector: 'app-listing-student',
  templateUrl: './listing-student.component.html',
  styleUrls: ['./listing-student.component.css']
})

export class ListingStudentComponent implements OnInit {

  public bsModalRef: BsModalRef;
  public students = <any>[];
  public allStudent = <any>[];

  constructor(
      private modalService: BsModalService,
      private studentService: StudentService,
  ) {}

  ngOnInit() {
    this.getStudents();
    this.updatedStudent();
  }

  getStudents() {
    this.studentService.getStudents().subscribe((resp: any) => {
      this.students = resp.data;
      this.allStudent = resp.data;
    });
  }

  confirmDeletedStudent(selectedStudentIdx): void {
    if (confirm('Do you want to delete this student?')) {
      this.students.splice(selectedStudentIdx, 1);
    }
  }

  search(item) {
    this.students = this.allStudent.filter(s => {
      return s.first_name.toUpperCase().includes(item.toUpperCase()) ? s.first_name.toUpperCase().includes(item.toUpperCase()) : s.last_name.toUpperCase().includes(item.toUpperCase());
    });
  }

  updatedStudent() {
    this.studentService.cerrentStudent.subscribe(value => {
      for (var i = 0; i < this.students.length; i++) {
        if (this.students[i].id == value.id) {
          this.students[i] = value;
        }
      }
    });
  }
}
