import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './login/log/log.component';
import { RegisterComponent } from './login/register/register.component';
import { UserListComponent } from './users-main/user-list/user-list.component';
import { UserEditComponent } from './users-main/user-edit/user-edit.component';
import { AdminAddComponent } from './admins-main/admin-edit/admin-add/admin-add.component';
import { AdminListComponent } from './admins-main/admin-list/admin-list.component';
import { AdminDelComponent } from './admins-main/admin-edit/admin-del/admin-del.component';
import { AdminEditItemComponent } from './admins-main/admin-edit/admin-edit-item/admin-edit-item.component';
import { ReporteVentasComponent } from './admins-main/admin-list/reporte-ventas/reporte-ventas.component';
import { InventarioComponent } from './admins-main/admin-list/inventario/inventario.component';
import { ProductosListComponent } from './productos-main/productos-list/productos-list.component';
import { ProductoDetailComponent } from './productos-main/producto-detail/producto-detail.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LogComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'edit', component: UserEditComponent},
  {path: 'showUsers', component: UserListComponent},
  {path: 'admin/add', component: AdminAddComponent},
  {path: 'admin/herramientas', component: AdminListComponent},
  {path: 'admin/delete', component: AdminDelComponent},
  {path: 'admin/edit', component: AdminEditItemComponent},
  {path: 'admin/reportevtas', component: ReporteVentasComponent},
  {path: 'admin/inventario', component: InventarioComponent},
  {path: 'products', component: ProductosListComponent},
  {path: 'products/:id', component: ProductoDetailComponent},
  {path: 'carrito', component: CarritoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

