import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CreateOrUpdateStudentModalComponent } from './create-or-update-student-modal/create-or-update-student-modal.component';
import { CustomFormsModule } from 'ng2-validation'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CreateOrUpdateStudentModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    CustomFormsModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  entryComponents: [CreateOrUpdateStudentModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

