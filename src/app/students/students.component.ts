import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../students';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CreateOrUpdateStudentModalComponent } from '../create-or-update-student-modal/create-or-update-student-modal.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {

  public bsModalRef: BsModalRef;
  public students = [];
  public allStudent = [];

  constructor(
      private modalService: BsModalService,
      private http: HttpClient
    ) {};

  ngOnInit() {
    this.getStudents().subscribe((resp: any)=>{
      this.students = resp.data;
      this.allStudent = resp.data;
    });
  }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>('https://reqres.in/api/users?page=2')
  };

  edit(selectedStudent: Student): void {
    const initialState = { student: selectedStudent};
    this.bsModalRef = this.modalService.show(CreateOrUpdateStudentModalComponent, 
    Object.assign({}, null, { class: 'modal-sm', initialState }));

    this.bsModalRef.content.studentSubmitted$.subscribe(edittedStudent => {
      console.log(edittedStudent);
      for (var i = 0; i < this.students.length; i ++) {
        if (this.students[i].id === edittedStudent.id) {
            this.students[i] = edittedStudent;
        }
      }
    })
  };

  confirmDeletedStudent(selectedStudent): void{
    if(confirm("Do you want to delete it ?")) {
      this.students.splice(selectedStudent, 1);
    }
  };

  search(item){
    this.students = this.allStudent.filter(function(s){
      return s.first_name.toUpperCase().includes(item.toUpperCase());
    })
  };

  openToAdd() {
    this.bsModalRef = this.modalService.show(CreateOrUpdateStudentModalComponent);

    this.bsModalRef.content.studentSubmitted$.subscribe(result => {
      var currentId = this.allStudent.length;
      result.id = this.allStudent[currentId - 1].id + 1;
      this.allStudent.push(result);
    })
  };
}


