import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminsService } from '../admins.service';
import { producto } from 'src/app/productos-main/producto';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  // producto: Producto;
  // marcas = this.adminservice.getMarcas();
  // categorias = this.adminservice.getCategorias();
  // nombre = '';
  // precio = 0;
  // categoria = '';
  // descripcion = '';
  // marca = '';
  // codigo = '';
  // existencias = 0;
  // url = '';

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

  // alta() {
  //   this.adminservice.CrearItem(new Producto(this.adminservice.lastId, this.nombre, this.precio,
  //     this.categoria, this.descripcion, this.marca, this.codigo, this.existencias, this.url));
  //   this.adminservice.toConsole();
  // }

  // borrar() {
  //   const $ = (id) => document.getElementById(id);
  //   const idnum: HTMLInputElement = $('id') as HTMLInputElement;
  //   this.adminservice.deleteItem(parseInt(idnum.value, 10));
  //   console.log(this.adminservice.toConsole());
  // }

  // showItem(id: number) {
  //   const p = this.adminservice.getItem(id);
  // }

  // editar() {
  //   const p = new Producto(this.adminservice.lastId, this.nombre, this.precio,
  //     this.categoria, this.descripcion, this.marca, this.codigo, this.existencias, this.url);
  //   this.adminservice.actualizarItem(p);
  // }
}

