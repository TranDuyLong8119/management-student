import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-or-update-student',
  templateUrl: './create-or-update-student.component.html',
  styleUrls: ['./create-or-update-student.component.css']
})

export class CreateOrUpdateStudentComponent implements OnInit {

  public student = <any>{};
  public edittedStudent = {};
  public students = <any>[];

  form = new FormGroup({
    avatar: new FormControl([]),
    id: new FormControl(),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required)
  });

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStudentToDetail();
  }

  public getStudentToDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.studentService.searchStudentsById(id).subscribe(student => {
        this.student = student;
        this.form.patchValue(this.student);
      });
    }
  }

  public goBack(): void {
    this.router.navigate(['/list']);
  }

  public submittedStudent(student) {
    debugger;
    this.studentService.saveStudent(student);
    this.goBack();
  }
}
