import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-main/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  getLogged(): boolean {
    return this.userService.userLogged;
  }

  getAdmin(): boolean {
    return this.userService.admin;
  }

  logout() {
    this.userService.userLogged = false;
    this.userService.loggedUser = null;
    this.userService.admin = false;
  }
}
