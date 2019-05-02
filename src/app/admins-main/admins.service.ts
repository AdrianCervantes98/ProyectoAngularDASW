import { Injectable } from '@angular/core';
import { Producto } from '../productos-main/producto';
import { Subject } from 'rxjs';
import { Venta } from '../venta/venta';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  cambiaDato = new Subject<Producto[]>();
  AgregaVta = new Subject<Venta[]>();

  // id para los pridutos
  lastId = 1;

  // Arreglo de las marcas
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

  // Arreglo de los productos
  productos: Producto[] = [
    new Producto(this.lastId++, 'jabon rosa', 23, this.categorias[2],
    'jabon de barra', this.marcas[1], 'AFFFKLJMP', 102, ''),

    new Producto(this.lastId++, 'Baterias AA', 13, this.categorias[0],
    'baterias 2AA', this.marcas[0], 'AAAAFDSD', 111, ''),

    new Producto(this.lastId++, 'Bombones con chocolate', 26, this.categorias[3],
    'baterias 2AA', this.marcas[3], 'QQAAFDSD', 191, ''),
    // new Producto(this.lastId++, 'jabon azul', 33, 'jabon'),
  ];

  x = Number[2] = [
    12, 23, 10
  ];

  nameproductos: string [] = [];
  nameproducts: string[] = this.getProductosString();

  // Arreglo de las Ventas
  vtas: Venta[] = [
    new Venta('julian', this.nameproducts, this.x , 112),
    new Venta('David', this.nameproducts, this.x, 12)
  ];

  constructor() { }

  private notificarCambios() {
    this.cambiaDato.next(this.productos.slice());
  }

  private notificarCambiosVtas() {
    this.AgregaVta.next(this.vtas.slice());
  }

  AvisoOperacion(estatus: boolean) {
    if (estatus === true) {
      alert('operacion exitosa');
    } else {
      alert('Operacion fallida');
    }
  }

  // devuelve el item
  getItem(id: number) {
    // obtener el item con el id correspondiente
    // retornar el item
    const pos = this.productos.findIndex(al => al.id === id);
    return Object.assign({}, this.productos[pos]);
  }

  // elimina un elemento
  deleteItem(id: number) {
    if (id <= 0) {
      return alert('Error');
    }
    const pos = this.productos.findIndex(al => al.id === id);
    const op = confirm('¿seguro que quiere elimar este elemnto?');
    if (op === true) {
      // eliminamos
      if (pos >= 0) {
        this.productos.splice(pos, 1);
        this.notificarCambios();
      }
    }
    return this.AvisoOperacion(op);
  }

  // crea un nuevo producto
  CrearItem(producto: Producto) {
    this.productos.push(producto);
    this.lastId++;
    this.notificarCambios();
    this.AvisoOperacion(true);
  }

  generarReporte() {
    // generacion de reporte
  }

  // edita un producto
  actualizarItem(producto: Producto) {
    const pos = this.productos.findIndex(al => al.id === producto.id);
    this.productos.splice(pos, 1, producto);
    this.notificarCambios();
    this.AvisoOperacion(true);
  }

  toConsole() {
    console.log(this.getProductos());
  }

  // devuelve el arreglo de productos
  getProductos() {
    return this.productos.slice();
  }

  // devuelve el arreglo de las marcas
  getMarcas() {
    return this.marcas.slice();
  }

  // devuelve el arreglo de las categorias
  getCategorias() {
    return this.categorias.slice();
  }

  // devuelve el arreglo de los nombres de los productos
  getProductosString() {
    this.productos.forEach(element => {
      this.nameproductos.push(element.nombre);
    });
    return this.nameproductos;
  }

  // devuelve el arreglo de la cantidad de cada producto en una venta
  getCantidadProductos(v: Venta) {
    this.productos.forEach(element => {
      // this.nameproductos.push(element.cantidad);
    });
    return this.nameproductos;
  }

  // crea una nueva venta
  crearVenta(V: Venta) {
    this.vtas.push(V);
    this.notificarCambiosVtas();
    this.AvisoOperacion(true);
  }

}
