import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Student } from '../students';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-or-update-student-modal',
  templateUrl: './create-or-update-student-modal.component.html',
  styleUrls: ['./create-or-update-student-modal.component.css']
})

export class CreateOrUpdateStudentModalComponent implements OnInit {

  form = new FormGroup({
    avatar: new FormControl(''),
    id: new FormControl({value:''}, Validators.required),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required)
  });

  public student = <any>{};
  public studentSubmitted$: Subject<any>;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.studentSubmitted$ = new Subject();    
    if(this.student){
      this.form.patchValue(this.student)
    }
  }

  public studentSubmit(s: Student): void {
    console.log(s);
  	this.studentSubmitted$.next(s);
  	this.bsModalRef.hide();
  }
}

