import { Injectable } from '@angular/core';
import { producto } from './producto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cambiaDato = new Subject<producto[]>();


  productos: producto[] = [
    new producto(1, 'Escoba', 'AGn', 'Limpieza', 30, 50),
    new producto(2, 'Recogedor', 'AGn', 'Limpieza', 25, 40),
    new producto(3, 'Trapeador', 'AGn', 'Limpieza', 40, 45),
    new producto(4, 'Fabuloso', 'Fabuloso', 'Limpieza', 18, 30),
    new producto(5, 'Jabon', 'Gillete', 'Personal', 20, 60),
    new producto(6, 'Suavitel', 'Colgate', 'Personal', 25, 100),
    new producto(7, 'Desodorante', 'Gillete', 'Personal', 12, 15),
    new producto(8, 'Rastrillo', 'Gillete', 'Personal', 22, 20),
    new producto(9, 'Cepillo', 'Colgate', 'Personal', 33, 30),
    new producto(10, 'Gel', 'Ego', 'Personal', 32, 17),
    new producto(11, 'Pasta de Dientes', 'Colgate', 'Personal', 22, 40),
    new producto(12, 'Jolly Rancher', 'Hersheys Company', 'Dulceria', 10, 12),
    new producto(13, 'Snicker', 'Snicker', 'Dulceria', 15, 19),
    new producto(14, 'M&Ms', 'M&Ms', 'Dulceria', 15, 22),
    new producto(15, 'Halls', 'Mondelez', 'Dulceria', 10, 33),
    new producto(16, 'Bombones', 'Vero', 'Dulceria', 12, 22),
    new producto(17, 'Hersheys', 'Hersheys Company', 'Dulceria', 20, 21),
    new producto(18, 'Bittes', 'Hersheys Company', 'Dulceria', 25, 13),
    new producto(19, 'Gel Antibacterial', 'Colgate', 'Personal', 45, 28)

  ];

  carrito: producto[] = [];

  constructor() { }

  getProductos(): producto[] {
    return this.productos.slice();
  }

  getProducto(id: number) {
    const pos = this.productos.findIndex(p => p.id === id);
    return Object.assign({}, this.productos[pos]);
  }

  private notificarCambios() {
    this.cambiaDato.next(this.productos.slice());
  }

  addCarrito(prod: producto) {
    this.carrito.push(prod);
  }

  removeCarrito(prod: producto) {
    const pos = this.carrito.findIndex(p => p.id === prod.id);
    this.carrito.splice(pos, 1);
  }

  getCarrito() {
    return this.carrito.slice();
  }



}
