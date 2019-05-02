import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/users-main/user';
import { UsersService } from 'src/app/users-main/users.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  cambiaDato = new Subject < User[]>();

  lastId = 1;
  constructor(
    private userser: UsersService
  ) { }

  ngOnInit() {
  }

  getUsers() {
    // retornamos el arreglo de los usuarios en existencia
    return this.userser.users.slice();
  }

//  editUser(u: User) {
  //  const pos = this.userser.users.findIndex(al => al.id === producto.id);
    //this.userser.users.splice(pos, 1, producto);
    //this.notificarCambios();
    //this.AvisoOperacion(true);
 // }

 // private notificarCambios() {
  //  this.cambiaDato.next(this.productos.slice());
 // }
}
