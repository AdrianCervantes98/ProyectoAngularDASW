import { Component, OnInit } from '@angular/core';
import { producto } from '../productos-main/producto';
import { ProductosService } from '../productos-main/productos.service';
import { Venta } from '../venta/venta';
import { UsersService } from '../users-main/users.service';
import { AdminsService } from '../admins-main/admins.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  // arreglo de productos para el carrito
  carrito: producto[];

  emptyCar: boolean;
  total: number;
  usuario = '';

  nameproductos: string[] = [];
  cantidad: number[] = [];

  constructor(
    private productoService: ProductosService,
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
    this.cantidad = this.productoService.cantprod;
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
// tslint:disable-next-line: max-line-length
    this.adminservice.crearVenta(new Venta(this.userservice.loggedUser.nombre, this.nameproductos, this.productoService.cantprod, this.total));
    this.productoService.carrito.length = 0;
    this.productoService.cantprod.length = 0;
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
// hace falta añadir cantidad para poder realizar esto
  }

}
