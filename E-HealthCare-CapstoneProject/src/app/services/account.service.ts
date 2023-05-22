import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { Iuser } from '../models/users';
import { LoginComponent } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private loggedIn: boolean = false;
  users: Iuser[] = [];
  loggedUser: any = {
    username: '',
    password: '',
    role: '',
  };

  constructor(
    private _usersService: UsersService 
  ) {}
  ngOnit() {}

  login(username: string, password: string): any {
    this._usersService.getUsers().subscribe((users) => (this.users = users));
    console.log(this.users);
    

    this.users.filter((user) => {
      if (user.username == username && user.password == password) {
        this.loggedUser.username = user.username;
        this.loggedUser.password = user.password;
        this.loggedUser.role = user.role;
        localStorage.setItem('firstname', user.fullname);
        localStorage.setItem('email', user.email);
        localStorage.setItem('role', this.loggedUser.role);
      }
    });
   
    if (
      username == this.loggedUser.username &&
      password == this.loggedUser.password
    ) {
      localStorage.setItem('user', username);

      this.loggedIn = true;
      alert('Login Success');
      return this.loggedIn;
    } else {
      this.loggedIn = false;
      alert('Please Enter Valid Credentials!');
      return this.isLoggedIn;
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    console.log(this.loggedIn);
    return this.loggedIn;
  }
}
