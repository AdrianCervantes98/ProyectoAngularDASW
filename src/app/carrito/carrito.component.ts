import { Component, OnInit } from '@angular/core';
import { producto } from '../productos-main/producto';
import { ProductosService } from '../productos-main/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito: producto[];
  emptyCar: boolean;
  total: number;

  constructor(private productoService: ProductosService) { }

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


  

}
