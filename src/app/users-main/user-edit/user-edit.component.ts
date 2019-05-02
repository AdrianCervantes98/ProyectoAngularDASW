import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  modoAdd = true;
  id: number;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        if (params.id) {
          this.modoAdd = false;
          this.id = Number(params.id);
          this.user = this.userService.loggedUser;
        } else {
          this.modoAdd = true;
          this.user = this.userService.loggedUser;
        }
      } );
  }

  save(formulario: NgForm) {
    this.userService.editUser(this.user);
    this.router.navigate(['/home']);
  }

  cancelar() {
    this.location.back();
  }

}
