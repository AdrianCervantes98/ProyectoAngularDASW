import { Component, OnInit } from '@angular/core';
import { producto } from '../producto';
import { Subscription } from 'rxjs';
import { ProductosService } from '../productos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  productos: producto [];
  carrito: producto [];
  searchText: string;
  searchProduct = [];
  showSearch = false;

  subscript: Subscription;
  subscriptCart: Subscription;

  constructor(private productoService: ProductosService,
              private router: Router,
              private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.currentPage(1);
  }

  inspeccionar(producto) {
    this.router.navigate([producto.id], { relativeTo: this.route });
  }

  currentPage(id) {
    //Muestra normal del paginado
    this.showSearch = false;
    if (id === 1) {
      this.productos = this.productoService.getProductos().slice(0, 6);
    } else if (id === 2) {
      this.productos = this.productoService.getProductos().slice(6, 12);
    } else if (id === 3) {
      this.productos = this.productoService.getProductos().slice(12, 18);
    } else {
      this.productos = this.productoService.getProductos().slice(18, 24);
    }
  }

  searchproduct(name: string) {
    this.searchProduct.length = 0;
    for (let i = 0; i < this.productoService.productos.length; i++) {
      if (this.productoService.productos[i].nombre.indexOf(name) !== -1) {
        this.searchProduct.push(this.productoService.productos[i]);
      }
    }
    this.showSearch = true;
  }





}
