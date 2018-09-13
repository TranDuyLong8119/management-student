import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CreateOrUpdateStudentModalComponent } from './create-or-update-student-modal/create-or-update-student-modal.component';
import { CustomFormsModule } from 'ng2-validation'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CreateOrUpdateStudentModalComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    CustomFormsModule,
    HttpClientModule, 
    ReactiveFormsModule, 
    AppRoutingModule
  ],
  entryComponents: [CreateOrUpdateStudentModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

