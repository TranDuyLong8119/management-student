import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ListingStudentComponent } from './listing-student/listing-student.component';
import { CreateOrUpdateStudentComponent } from './create-or-update-student/create-or-update-student.component';
import { StudentService } from './student.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component'


@NgModule({
  declarations: [
    AppComponent,
    ListingStudentComponent,
    CreateOrUpdateStudentComponent,
    PageNotFoundComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    CustomFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})

export class AppModule { }

