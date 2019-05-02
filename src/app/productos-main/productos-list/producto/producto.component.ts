import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { producto } from '../../producto';
import { ProductosService } from '../../productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor( private productoService: ProductosService) { }

  @Input() producto: producto;
  @Output() removeFromCart = new EventEmitter();
  @Output() infoProduct = new EventEmitter();

  ngOnInit() {
  }

  quitarProducto() {
    this.removeFromCart.emit(this.producto);
  }

  anadirProducto() {
    this.productoService.addCarrito(this.producto);
    console.log(this.productoService.carrito);
  }

  infoProducto() {
    this.infoProduct.emit(this.producto);
  }




}
