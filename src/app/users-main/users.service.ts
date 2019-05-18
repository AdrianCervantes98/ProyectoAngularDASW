import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  cambiaDato = new Subject<User[]>();
  lastid;
  userLogged = false;
  loggedUser: User;
  admin: boolean;
  local = environment.apiUrl;
  


  public users: User[] = [];

  usersMails: string[] = [];

  admins: string[] = [];

  constructor(private http: HttpClient) { }

  getNextId(): number {
    return this.lastid;
  }

  containsMail(mail: string): boolean {
    return this.usersMails.includes(mail);
  }

  containsAdmin(mail: string): boolean {
    return this.admins.includes(mail);
  }

  addMail(mail: string) {
    this.usersMails.push(mail);
  }

  addUser(user: User) {
    this.getUsers();
    const body = {
      id: this.lastid + 1,
      nombre: user.nombre,
      domicilio: user.domicilio,
      fecha: user.fecha,
      cp: user.cp,
      mail: user.mail,
      password: user.password,
      rol: 'user',
      token: '123'
    };
    //console.log(JSON.stringify(body));

    this.http.post(this.local + '/usuarios', body)
      .subscribe((data: User) => {
        console.log(data);
      }, (err) => {
        console.log(err);
      });
    if (!this.containsMail(user.mail)) {
      this.addMail(user.mail);
      this.users.push(Object.assign({}, user));
      this.notificarCambios();
    }
  }

  getLoggedUser(mail) {
    this.http.get(this.local + '/usuario/' + mail)
      .subscribe((data: User) => {
        this.loggedUser = data;
        console.log(data);
      }, (err) => {
        console.log(err);
      });
  }

  logIn(email, pw) {
    const body = {
      mail: email,
      password: pw,
    }
    this.http.post(this.local + '/user/login', body)
      .subscribe((data: User) => {
      }, (err) => {
        console.log(err);
      });
  }

  editUser(user: User) {
    const body = {
      id: user.id,
      nombre: user.nombre,
      domicilio: user.domicilio,
      fecha: user.fecha,
      cp: user.cp,
      mail: user.mail,
      password: user.password,
      rol: user.rol,
      token: user.token
    };
    this.getLoggedUser(this.loggedUser.mail);
    this.http.patch(this.local + '/usuario/' + this.loggedUser.mail, body,  {headers: {'x-auth': this.loggedUser.token}})
      .subscribe((data: User) => {
        console.log(data);
        const pos = this.users.findIndex(u => u.id === user.id);
        Object.assign(this.users[pos], user);
        this.notificarCambios();
      }, (err) => {
        console.log(err);
      });
      // const pos = this.users.findIndex(u => u.id === user.id);
      // Object.assign(this.users[pos], user);
      // this.notificarCambios();
  }

  getUsers() {
    this.http.get(this.local + '/usuarios')
      .subscribe((data: User[]) => {
        this.users = data;
        this.lastid = this.users.length;
        this.users.forEach(u => {
          this.addMail(u.mail);
          if (u.rol === 'admin') {
            this.admins.push(u.mail);
          }
        });
        console.log(this.users);
      }, (err) => {
        console.log(err);
      });
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
