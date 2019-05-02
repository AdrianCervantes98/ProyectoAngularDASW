import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/productos-main/producto';
import { AdminsService } from '../../admins.service';
import { ProductosService } from 'src/app/productos-main/productos.service';

@Component({
  selector: 'app-admin-edit-item',
  templateUrl: './admin-edit-item.component.html',
  styleUrls: ['./admin-edit-item.component.css']
})
export class AdminEditItemComponent implements OnInit {

  marcas = this.adminservice.getMarcas();
  categorias = this.adminservice.getCategorias();
  // valores de el producto a seleccionar
  productosh = ProductosService.getItem();

  nombre = this.productosh.nombre;
  precio = this.productosh.precio;
  categoria = this.productosh.categoria;
  descripcion = this.productosh.descripcion;
  marca = this.productosh.marca;
  codigo = this.productosh.codigo;
  existencias = this.productosh.existencia;
  url = this.productosh.url;

  constructor(
    private adminservice: AdminsService,
  ) { }

  ngOnInit() {
  }
  editar() {
    const p = new Producto(this.adminservice.lastId, this.nombre, this.precio,
      this.categoria, this.descripcion, this.marca, this.codigo, this.existencias, this.url);
    this.adminservice.actualizarItem(p);
  }
  // productoToShow() {
  //   productosh = this.adminservice.getItem();
  // }
}
