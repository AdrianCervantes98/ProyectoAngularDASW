import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../admins.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(
    private adminservice: AdminsService,
  ) { }

  ngOnInit() {
  }

}
