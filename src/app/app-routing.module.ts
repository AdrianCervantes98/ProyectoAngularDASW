import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './login/log/log.component';
import { RegisterComponent } from './login/register/register.component';
import { UserListComponent } from './users-main/user-list/user-list.component';
import { UserEditComponent } from './users-main/user-edit/user-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LogComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'edit', component: UserEditComponent},
  {path: 'showUsers', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

