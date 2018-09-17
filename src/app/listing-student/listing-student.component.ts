import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../students';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { STUDENTS } from '../listing-student';

@Component({
  selector: 'app-listing-student',
  templateUrl: './listing-student.component.html',
  styleUrls: ['./listing-student.component.css']
})

export class ListingStudentComponent implements OnInit {

  public bsModalRef: BsModalRef;
  public students = STUDENTS;
  public allStudent = STUDENTS;

  constructor(
      private modalService: BsModalService,
      private studentService: StudentService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.getStudents();
    this.students = this.studentService.students;
  }

  // getStudents() {
  //   this.studentService.getStudents().subscribe((resp: any) => {
  //     this.students = resp.data;
  //     this.allStudent = resp.data;
  //   });
  // }

  confirmDeleteStudent(selectedStudentIdx): void {
    if (confirm('Do you want to delete this student?')) {
      this.students.splice(selectedStudentIdx, 1);
    }
  }

  search(item) {
    this.students = this.allStudent.filter(s => {
      return s.first_name.toUpperCase().includes(item.toUpperCase()) 
          || s.last_name.toUpperCase().includes(item.toUpperCase());
    });
  }
}
