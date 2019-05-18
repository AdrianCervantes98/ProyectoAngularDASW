import { Injectable } from '@angular/core';
import { producto } from '../productos-main/producto';
import { Venta } from '../venta/venta';
import { ProductosService } from '../productos-main/productos.service';
import { ProductoDetailComponent } from '../productos-main/producto-detail/producto-detail.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  // id para los pridutos
  local = environment.apiUrl;
  productos: producto[] = this.prodservice.productos;
  nameproducts: string[] = [];
  lastId = this.productos.length + 1;
  // Arreglo de las Ventas
  vtas: Venta[] = [];

  constructor(
    private prodservice: ProductosService,
    private prodDetail: ProductoDetailComponent,
    private http: HttpClient
  ) { }

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
// tslint:disable-next-line: no-shadowed-variable
  deleteItem(id: number, producto: producto) {
    if (id <= 0 || id > this.productos.length) {
      return alert('Error id invalido');
    }
    const op = confirm('¿seguro que quiere elimar este elemnto?');
    
    const body = {
      id: producto.id,
    };

    // if (op === true) {
      // this.http.delete('http://127.0.0.1:3003/api/producto/:id', body)
    //   .subscribe((data: producto) => {
    //     console.log(data);
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }
    return this.AvisoOperacion(op);
  }

  // crea un nuevo producto
// tslint:disable-next-line: no-shadowed-variable
  CrearItem(producto: producto) {
    const body = {
      id: this.lastId,
      nombre: producto.nombre,
      precio: producto.precio,
      categoria: producto.categoria,
      descripcion: producto.descripcion,
      marca: producto.marca,
      codigo: producto.codigo,
      existencia: producto.existencia,
      url: producto.url
    };
    console.log(body);
    this.http.post(this.local + '/productos', body)
      .subscribe((data: producto) => {
        console.log(data);
      }, (err) => {
        console.log(err);
      });
    this.prodservice.productos.push(producto);
    this.lastId++;
   // this.notificarCambios();
    this.AvisoOperacion(true);
  }

  generarReporte() {
    // generacion de reporte
  }

  // edita un producto
// tslint:disable-next-line: no-shadowed-variable
  actualizarItem(producto: producto) {

    const body = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      categoria: producto.categoria,
      descripcion: producto.descripcion,
      marca: producto.marca,
      codigo: producto.codigo,
      existencia: producto.existencia,
      url: producto.url
    };

    console.log(body);
    this.http.patch(this.local + '/productos', body)
      .subscribe((data: producto) => {
        console.log(data);
      }, (err) => {
        console.log(err);
      });

    this.prodservice.productos.push(producto);
   // this.notificarCambios();
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
    return this.prodservice.marcas.slice();
  }

  // devuelve el arreglo de las categorias
  getCategorias() {
    return this.prodservice.categorias.slice();
  }

  // devuelve el arreglo de los nombres de los productos
  getProductosString() {
    this.prodservice.productos.forEach(element => {
      this.nameproducts.push(element.nombre);
    });
    return this.nameproducts;
  }

  // crea una nueva venta
  crearVenta(V: Venta) {
    // this.vtas.push(V);
    // // this.notificarCambiosVtas();
    // this.AvisoOperacion(true);
    const f = new Date();
    const body = {
      carrito: V.nombre,
      total: V.total,
      estado: false,
      date: f
    };

    console.log(body);
    this.http.post(this.local + '/ventas', body)
      .subscribe((data: Venta) => {
        console.log(data);
      }, (err) => {
        console.log(err);
        this.AvisoOperacion(false);
      });

    this.vtas.push(V);
  }

  // Regresa el id de el producto detalle en cuestion
  getIdItem() {
    return this.prodDetail.id;
  }
  borradopermante(id: number) {
    const pos = this.prodservice.productos.findIndex(al => al.id === id);
    this.prodservice.productos.splice(pos, 1);
  }

}
