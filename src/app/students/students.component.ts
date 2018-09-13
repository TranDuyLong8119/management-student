import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../students';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CreateOrUpdateStudentModalComponent } from '../create-or-update-student-modal/create-or-update-student-modal.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {

  public bsModalRef: BsModalRef;
  public students = <any>[];
  public allStudent = <any>[];

  constructor(
      private modalService: BsModalService,
      private studentService: StudentService
  ) {};

  ngOnInit() {
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().subscribe((resp: any) => {
      this.students = resp.data;
      this.allStudent = resp.data;
    });
  }

  edit(selectedStudent: Student): void {
    const initialState = {student: selectedStudent};
    this.bsModalRef = this.modalService.show(CreateOrUpdateStudentModalComponent, 
    Object.assign({}, null, { initialState }));

    this.bsModalRef.content.studentSubmitted$.subscribe(edittedStudent => {
      for (var i = 0; i < this.students.length; i++) {
        if (this.students[i].id == edittedStudent.id) {
            this.students[i] = edittedStudent;
        }
      }  
    })
  };

  confirmDeletedStudent(selectedStudentIdx): void{
    if(confirm("Do you want to delete this student?")) {
      this.students.splice(selectedStudentIdx, 1);
    }
  };

  search(item){
    this.students = this.allStudent.filter(s => {
      return s.first_name.toUpperCase().includes(item.toUpperCase()) ? s.first_name.toUpperCase().includes(item.toUpperCase()) : s.last_name.toUpperCase().includes(item.toUpperCase());
    })
  };

  openToAdd() {
    this.bsModalRef = this.modalService.show(CreateOrUpdateStudentModalComponent);

    this.bsModalRef.content.studentSubmitted$.subscribe(addedStudent => {
      var currentId = this.allStudent.length;
      addedStudent.id = this.allStudent[currentId - 1].id + 1;
      this.allStudent.push(addedStudent);
    })
  };
}


