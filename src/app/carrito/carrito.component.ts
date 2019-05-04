import { Component, OnInit } from '@angular/core';
import { producto } from '../productos-main/producto';
import { ProductosService } from '../productos-main/productos.service';
import { VentaComponent } from '../venta/venta.component';
import { Venta } from '../venta/venta';
import { UsersService } from '../users-main/users.service';
import { AdminsService } from '../admins-main/admins.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito: producto[];
  cantprod: number[];
  emptyCar: boolean;
  total: number;
  usuario = '';

  nameproductos: string[] = [];
  canttidad: number[] = [];

  constructor(
    private productoService: ProductosService,
    private vtasservice: VentaComponent,
    private userservice: UsersService,
    private adminservice: AdminsService,
  ) { }

  ngOnInit() {
    this.carrito = this.productoService.getCarrito();
    if (this.carrito.length < 1) {
      this.emptyCar = true;
    } else {
      this.emptyCar = false;
    }
    this.total = this.calculateTotal(this.carrito);
  }

  calculateTotal(car): number {
    let tot = 0;
    for (const prod of car) {
      tot += prod.precio;
    }
    return tot;
  }

  resetCar() {
    this.getArrayProductos();
    this.adminservice.crearVenta(new Venta(this.userservice.loggedUser.nombre, this.nameproductos, this.canttidad, this.total));
    this.productoService.carrito.length = 0;
  }

  removeFromCart(prod) {
    this.productoService.removeCarrito(prod);
    this.carrito = this.productoService.getCarrito();
    this.total = this.calculateTotal(this.carrito);
    if (this.carrito.length < 1) {
      this.emptyCar = true;
    }
  }

  getArrayProductos() {
    this.carrito.forEach(element => {
      this.nameproductos.push(element.nombre);
    });
    this.cantprod.forEach(element => {
      this.canttidad.push(element);
    });
  }

}
