import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../admins.service';
import { Producto } from 'src/app/productos-main/producto';

@Component({
  selector: 'app-admin-del',
  templateUrl: './admin-del.component.html',
  styleUrls: ['./admin-del.component.css']
})
export class AdminDelComponent implements OnInit {
  producto: Producto;
  constructor(
    private adminservice: AdminsService
  ) { }

  ngOnInit() {
  }
  borrar() {
    const $ = (id) => document.getElementById(id);
    const idnum: HTMLInputElement = $('id') as HTMLInputElement;
    this.adminservice.deleteItem(parseInt(idnum.value, 10));
    console.log(this.adminservice.toConsole());
  }

  showItem(id: number) {
    const p = this.adminservice.getItem(id);
  }
}
