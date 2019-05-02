import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/productos-main/producto';
import { AdminsService } from '../../admins.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  producto: Producto;
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

  // myForm: FormGroup;
  constructor(
    private adminservice: AdminsService
    // public fb: FormBuilder,
  ) {
    // this.myForm = this.fb.group({
    //   name: ['', [Validators.required]],
    //   company: ['', [Validators.required]],
    //   email: ['', [Validators.required]],
    //   age: ['', [Validators.required]],
    //   url: ['', [Validators.required]],
    //   password: ['', [Validators.required]],
    // });
  }

  ngOnInit() {
  }

  alta() {
    this.adminservice.CrearItem(new Producto(this.adminservice.lastId, this.nombre, this.precio,
      this.categoria, this.descripcion, this.marca, this.codigo, this.existencias, this.url));
  }
}
