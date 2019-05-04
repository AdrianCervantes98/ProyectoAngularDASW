import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/productos-main/producto';
import { AdminsService } from '../../admins.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductoDetailComponent } from 'src/app/productos-main/producto-detail/producto-detail.component';


@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  producto: producto;
  marcas = this.adminservice.getMarcas();
  categorias = this.adminservice.getCategorias();
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
    private productoDet: ProductoDetailComponent

  ) { }

  ngOnInit() {
  }

  alta() {
    this.adminservice.CrearItem(new producto(this.adminservice.lastId, this.nombre, this.precio,
      this.categoria, this.descripcion, this.marca, this.codigo, this.existencias, this.url));
  }
}

