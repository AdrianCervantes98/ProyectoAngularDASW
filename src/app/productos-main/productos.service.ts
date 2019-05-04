import { Injectable } from '@angular/core';
import { producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // cambiaDato = new Subject<producto[]>();
  lastId = 1;
  marcas: string [] = [
    'Duracell',
    'Dove',
    'Nivea',
    'La rosa',
    'La costeña'
  ];

  // Arreglo de las categorias
  categorias: string[] = [
    'Abarrote',
    'Pilas',
    'Perfumeria',
    'Dulceria'
  ];

  productos: producto[] = [
    new producto(this.lastId++, 'jabon rosa', 23, this.categorias[2],
    'jabon de barra', this.marcas[1], 'AFFFKLJMP', 102, ''),

    new producto(this.lastId++, 'Baterias AA', 13, this.categorias[0],
    'baterias 2AA', this.marcas[0], 'AAAAFDSD', 111, ''),

    new producto(this.lastId++, 'Bombones con chocolate', 26, this.categorias[3],
    'baterias 2AA', this.marcas[3], 'QQAAFDSD', 191, ''),

    new producto(this.lastId++, 'Crema para piel', 36, this.categorias[2],
    'Crema para el cuerpo', this.marcas[2], 'QDAAHSZ', 191, ''),
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

  // private notificarCambios() {
  //   this.cambiaDato.next(this.productos.slice());
  // }

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
