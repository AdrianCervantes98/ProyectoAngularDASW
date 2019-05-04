import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {

  id: number;
  nombre: string;
  marca: string;
  categoria: string;
  precio: number;
  existencia: number;

  constructor(private productosService: ProductosService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = Number(params.id);
        const producto = this.productosService.getProducto(this.id);
        this.nombre = producto.nombre;
        this.marca = producto.marca;
        this.categoria = producto.categoria;
        this.precio = producto.precio;
        this.existencia = producto.existencia;
      }
    );
  }

  // Regresar a la pantalla anterior
  back() {
    this.location.back();
  }


}
