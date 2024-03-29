import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Output() editUser = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editarUser() {
    this.editUser.emit(this.user);
  }

}
