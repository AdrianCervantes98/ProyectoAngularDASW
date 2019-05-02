import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  searchUsers = [];
  searchDisplay = false;
  searchText;

  subscript: Subscription;
  constructor(private userService: UsersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentPage(1);
    this.subscript = this.userService.cambiaDato.subscribe(
      (arrayUsers: User[]) => {
        this.users = arrayUsers;
      }
    );
  }

  editar(user: User) {
    this.router.navigate(['/edit']);
    console.log(`El usuario a editar id: ${user.id} nombre: ${user.nombre}`);
  }

  crearUsuario() {
    this.router.navigate(['/register']);
  }

  currentPage(id) {
    this.searchDisplay = false;
    if (id === 1) {
      this.users = this.userService.getUsers().slice(0, 5);
    } else if (id === 2) {
      this.users = this.userService.getUsers().slice(5, 10);
    } else {
      this.users = this.userService.getUsers().slice(10, 15);
    }
  }

  searchName(name: string) {
    this.searchUsers.length = 0;
    for (let i = 0; i < this.userService.users.length; i++) {
      if (this.userService.users[i].nombre.indexOf(name) !== -1) {
        this.searchUsers.push(this.userService.users[i]);
      }
    }
    this.searchDisplay = true;
  }

}
