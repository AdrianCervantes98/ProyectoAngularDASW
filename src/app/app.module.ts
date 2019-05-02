import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogComponent } from './login/log/log.component';
import { RegisterComponent } from './login/register/register.component';
import { UsersMainComponent } from './users-main/users-main.component';
import { UserEditComponent } from './users-main/user-edit/user-edit.component';
import { UserListComponent } from './users-main/user-list/user-list.component';
import { UserComponent } from './users-main/user-list/user/user.component';
import {FormsModule} from '@angular/forms';
import { AdminsMainComponent } from './admins-main/admins-main.component';
import { AdminEditComponent } from './admins-main/admin-edit/admin-edit.component';
import { AdminListComponent } from './admins-main/admin-list/admin-list.component';
import { AdminComponent } from './admins-main/admin-list/admin/admin.component';
import { ProductosMainComponent } from './productos-main/productos-main.component';
import { ProductosListComponent } from './productos-main/productos-list/productos-list.component';
import { ProductosEditComponent } from './productos-main/productos-edit/productos-edit.component';
import { ProductoDetailComponent } from './productos-main/producto-detail/producto-detail.component';
import { ProductoComponent } from './productos-main/productos-list/producto/producto.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    LogComponent,
    RegisterComponent,
    UsersMainComponent,
    UserEditComponent,
    UserListComponent,
    UserComponent,
    AdminsMainComponent,
    AdminEditComponent,
    AdminListComponent,
    AdminComponent,
    ProductosMainComponent,
    ProductosListComponent,
    ProductosEditComponent,
    ProductoDetailComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
