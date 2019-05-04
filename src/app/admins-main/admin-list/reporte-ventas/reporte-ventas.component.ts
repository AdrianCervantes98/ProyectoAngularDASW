import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/venta/venta';
import { AdminsService } from '../../admins.service';
import { producto } from 'src/app/productos-main/producto';
import { VentaComponent } from 'src/app/venta/venta.component';

@Component({
  selector: 'app-reporte-ventas',
  templateUrl: './reporte-ventas.component.html',
  styleUrls: ['./reporte-ventas.component.css']
})
export class ReporteVentasComponent implements OnInit {

  constructor(
    private adminservice: AdminsService,
  ) { }

  ArrayVtas: Venta[] = this.adminservice.vtas;

  ngOnInit() {
  }


}


