import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../admins.service';
import { ProductosService } from 'src/app/productos-main/productos.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(
    private adminservice: AdminsService, private productoService: ProductosService
  ) { }

  ngOnInit() {
    
  }

}
