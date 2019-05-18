import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../admins.service';
import { producto } from 'src/app/productos-main/producto';

@Component({
  selector: 'app-admin-del',
  templateUrl: './admin-del.component.html',
  styleUrls: ['./admin-del.component.css']
})
export class AdminDelComponent implements OnInit {
  producto: producto;
  constructor(
    private adminservice: AdminsService
  ) { }

  idnum = this.adminservice.getIdItem();
  ngOnInit() {
  }
  borrar() {
    this.producto = this.adminservice.getItem(this.idnum);
    this.adminservice.deleteItem(this.idnum, this.producto );
    console.log(this.adminservice.toConsole());
  }

  showItem(id: number) {
    const p = this.adminservice.getItem(this.idnum);
  }
}
