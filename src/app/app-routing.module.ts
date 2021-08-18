import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDetailsComponent } from './get-details/get-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path:'', component: UsersComponent},
  //{ path:'create', component: CreateComponent},
  { path:'details', component: GetDetailsComponent},
  { path:'users', component: UsersComponent},
  { path:'users/:id', component: GetDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
