import { Component, OnInit, Input } from '@angular/core';
import { producto } from 'src/app/productos-main/producto';
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
  productosh = this.adminservice.getItem(this.adminservice.getIdItem());

  id = 0;
  nombre = '';
  precio = 0;
  categoria = '';
  descripcion = '';
  marca = '';
  codigo = '';
  existencias = 0;
  url = '';

  constructor(
    private adminservice: AdminsService,
  ) { }

  ngOnInit() {
  }

  editar() {
    const p = new producto(this.id, this.nombre, this.precio,
      this.categoria, this.descripcion, this.marca, this.codigo, this.existencias, this.url);
    this.adminservice.actualizarItem(p);
  }


}
