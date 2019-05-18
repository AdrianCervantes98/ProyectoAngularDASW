import { Injectable } from '@angular/core';
import { producto } from './producto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // cambiaDato = new Subject<producto[]>();
  local = environment.apiUrl;
  lastId = 1;
  marcas: string[] = [
    'Gaona',
    'Dove',
    'Dulces',
  ];

  // Arreglo de las categorias
  categorias: string[] = [
    'Abarrotes',
    'Limpieza',
    'Perfumeria',
    'Dulceria',
    'Personal'
  ];

  public productos: producto[] = [];

  carrito: producto[] = [];
  cantprod: number[] = [];
  constructor(private http: HttpClient) { }

  getProductos() {
    this.http.get(this.local + '/productos').subscribe((data: producto[]) => {
      console.log(data);
      this.productos = data;
    });
  }

  getProducto(id: number) {
    const pos = this.productos.findIndex(p => p.id === id);
    return Object.assign({}, this.productos[pos]);
  }

  addCarrito(prod: producto) {

    if (this.carrito.length === 0) {
      this.carrito.push(prod);
      this.cantprod.push(1);
      return;
    }
    this.repetidos(prod);
  }

  removeCarrito(prod: producto) {
    const pos = this.carrito.findIndex(p => p.id === prod.id);
    this.carrito.splice(pos, 1);
  }

  getCarrito() {
    return this.carrito.slice();
  }

  private repetidos(prod: producto) {

    // if (this.carrito[this.carrito.length - 1].id === prod.id) {
    //   console.log('entra a if');
    //   this.cantprod[this.cantprod.length - 1]++;
    //   return;
    // } else {
    //   this.carrito.push(prod);
    //   this.cantprod.push(1);
    for (let i = 0; i < this.carrito.length; i++) {
      if (this.carrito[i].id === prod.id) {
        this.cantprod[i]++;
        return;
      }
    }

    this.carrito.push(prod);
    this.cantprod.push(1);

  }

}



