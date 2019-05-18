import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users-main/user';
import { UsersService } from 'src/app/users-main/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  user: User;
  mail = '';
  password = '';

  constructor(private userService: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getUsers();
  }

  submit(formulario: NgForm) {
    if (this.userService.containsMail(this.mail)) {
      if (this.userService.containsAdmin(this.mail)) {
        this.userService.admin = true;
      }
      if (this.userService.passwordMatch(this.password, this.userService.getUserId(this.mail))) {
        this.user = this.userService.getUser(this.userService.getUserId(this.mail));
        alert(`Bienvenido ${this.user.nombre}`);
        this.userService.userLogged = true;
        this.userService.loggedUser = this.user;
        console.log(this.userService.admin);
        this.router.navigate(['/home']);
      }
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }

}
