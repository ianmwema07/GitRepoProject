import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ReposComponent } from './repos/repos.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'users', component:UsersComponent },
  { path:'repos', component:ReposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
