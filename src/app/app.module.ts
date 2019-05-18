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
import { AdminAddComponent } from './admins-main/admin-edit/admin-add/admin-add.component';
import { AdminDelComponent } from './admins-main/admin-edit/admin-del/admin-del.component';
import { AdminEditItemComponent } from './admins-main/admin-edit/admin-edit-item/admin-edit-item.component';
import { ReporteVentasComponent } from './admins-main/admin-list/reporte-ventas/reporte-ventas.component';
import { InventarioComponent } from './admins-main/admin-list/inventario/inventario.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductosService } from './productos-main/productos.service';
import { VentaComponent } from './venta/venta.component';
// import { HttpModule} from '@angular/http';

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
    AdminAddComponent,
    AdminDelComponent,
    AdminEditItemComponent,
    ReporteVentasComponent,
    InventarioComponent,
    CarritoComponent,
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
    HttpClientModule,
  ],
  providers: [ProductoDetailComponent, ProductosService, VentaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
