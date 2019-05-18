import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users-main/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/users-main/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User(0, '', '', new Date(), 0, '', '', '', '');
  name = '';
  address = '';
  date = new Date();
  cp = '';
  mail = '';
  password = '';
  rol = '';


  constructor(private userService: UsersService,
              private router: Router) { }

  ngOnInit() {
  }

  submit(formulario: NgForm) {
    if (this.userService.containsMail(this.mail)){
     this.errorAlert();
    } else {
      this.user.nombre = this.name;
      this.user.domicilio = this.address;
      this.user.fecha = this.date;
      this.user.cp = Number(this.cp);
      this.user.mail = this.mail;
      this.user.password = this.password;
      console.log(this.user);
      this.userService.addUser(this.user);
      this.registerAlert();
      this.router.navigate(['/home']);
    }
  }

  registerAlert() {
    alert('¡Usuario registrado correctamente!');
  }

  errorAlert() {
    alert('El correo que ha introducido ya está registrado.');
  }

}
