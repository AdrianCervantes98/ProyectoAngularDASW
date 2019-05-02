import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  cambiaDato = new Subject<User[]>();
  private lastid = 1;
  userLogged = false;
  loggedUser: User;

  users: User[] = [
    new User(this.lastid++, 'Pallandro', 'Avenida Primavera 123', new Date('05-03-1998'), 45050, 'pallandro@iteso.mx', 'pallandro'),
    new User(this.lastid++, 'Ian Gibson', 'Guadalupe 123', new Date('02-12-1998'), 46111, 'iangibson@iteso.mx', 'iangibson'),
    new User(this.lastid++, 'Harry Beltran', 'Cerro del cuatro 123', new Date('08-10-1996'), 45110, 'harry@iteso.mx', 'harrybeltran'),
    new User(this.lastid++, 'a', 'Avenida Primavera 123', new Date('05-03-1998'), 45050, 'a@iteso.mx', 'pallandro'),
    new User(this.lastid++, 'b', 'Avenida Primavera 123', new Date('05-03-1998'), 45050, 'b@iteso.mx', 'pallandro'),
    new User(this.lastid++, 'c', 'Avenida Primavera 123', new Date('05-03-1998'), 45050, 'c@iteso.mx', 'pallandro'),
    new User(this.lastid++, 'd', 'Avenida Primavera 123', new Date('05-03-1998'), 45050, 'd@iteso.mx', 'pallandro'),
    new User(this.lastid++, 'e', 'Avenida Primavera 123', new Date('05-03-1998'), 45050, 'e@iteso.mx', 'pallandro'),
    new User(this.lastid++, 'f', 'Avenida Primavera 123', new Date('05-03-1998'), 45050, 'f@iteso.mx', 'pallandro'),
    new User(this.lastid++, 'g', 'Avenida Primavera 123', new Date('05-03-1998'), 45050, 'g@iteso.mx', 'pallandro'),
    new User(this.lastid++, 'h', 'Avenida Primavera 123', new Date('05-03-1998'), 45050, 'h@iteso.mx', 'pallandro'),
    new User(this.lastid++, 'i', 'Avenida Primavera 123', new Date('05-03-1998'), 45050, 'i@iteso.mx', 'pallandro'),
    new User(this.lastid++, 'j', 'Avenida Primavera 123', new Date('05-03-1998'), 45050, 'j@iteso.mx', 'pallandro'),
  ];

  usersMails: string[] = [
    'pallandro@iteso.mx',
    'iangibson@iteso.mx',
    'harry@iteso.mx',
    'a@iteso.mx',
    'b@iteso.mx',
    'c@iteso.mx',
    'd@iteso.mx',
    'e@iteso.mx',
    'f@iteso.mx',
    'g@iteso.mx',
    'h@iteso.mx',
    'i@iteso.mx',
    'j@iteso.mx',
  ];

  constructor() { }

  getNextId(): number {
    return this.lastid;
  }

  containsMail(mail: string): boolean {
    return this.usersMails.includes(mail);
  }

  addMail(mail: string) {
    this.usersMails.push(mail);
  }

  addUser(user: User) {
    user.id = this.lastid;
    if (!this.containsMail(user.mail)) {
      this.addMail(user.mail);
      this.users.push(Object.assign({}, user));
      this.lastid++;
      this.notificarCambios();
    }
  }

  editUser(user: User) {
    const pos = this.users.findIndex(u => u.id === user.id);
    Object.assign(this.users[pos], user);
    this.notificarCambios();
  }

  getUsers(): User[] {
    return this.users.slice();
  }

  getUser(id: number): User {
    const pos = this.users.findIndex(u => u.id === id);
    return Object.assign({}, this.users[pos]);
  }

  private notificarCambios() {
    this.cambiaDato.next(this.users.slice());
  }

  passwordMatch(password: string, id: number): boolean {
    const user = this.getUser(id);
    return user.password === password;
  }

  getUserId(mail: string): number {
    if (this.containsMail(mail)) {
      let posMail = this.usersMails.indexOf(mail);
      posMail++;
      return posMail;
    }
  }


}
