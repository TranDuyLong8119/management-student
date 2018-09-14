import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrUpdateStudentComponent } from './create-or-update-student/create-or-update-student.component';
import { ListingStudentComponent } from './listing-student/listing-student.component';

const routes: Routes = [
	{ path: 'list', component: ListingStudentComponent },
	{ path: '', redirectTo: '/list', pathMatch: 'full' },
	{ path: 'add', component: CreateOrUpdateStudentComponent },
	{ path: 'edit/:id', component: CreateOrUpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {	}




