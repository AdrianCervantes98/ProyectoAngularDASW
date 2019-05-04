import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../admins-main/admins.service';
import { Venta } from './venta';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  usuario = '';
  cantidades: number[] = [];
  productos: string[] = [];
  total = 0;

  constructor(
    private adminservice: AdminsService,
  ) { }

  ngOnInit() {
  }

  NewVta(V: Venta) {
    this.adminservice.crearVenta(V);
  }
}
