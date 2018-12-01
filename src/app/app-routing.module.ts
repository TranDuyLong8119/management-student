import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrUpdateStudentComponent } from './create-or-update-student/create-or-update-student.component';
import { ListingStudentComponent } from './listing-student/listing-student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: '/list', pathMatch: 'full' },
	{ path: 'list', component: ListingStudentComponent },
	{ path: 'add', component: CreateOrUpdateStudentComponent },
	{ path: 'edit/:id', component: CreateOrUpdateStudentComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }