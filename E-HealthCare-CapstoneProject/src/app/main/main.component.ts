import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  cartLength : any;

  constructor(
    private _accountService: AccountService,
    private _router: Router
    
  ) {
    this.getCartItemsLength()
    this.isLogin()
  }
  isLogin() : boolean{
    if(sessionStorage.getItem("user") != null){
      return true
    }else{
      return false
    }
  }

  role: any = '';
  ngOnInit() {
    this.role = localStorage.getItem('role');
    console.log(this.role);
  }
  isRole(): string {
    if (this.role == 'admin') {
      return 'admin';
    } else {
      return 'user';
    }
  }

  logout() {
    this._accountService.logout();
    localStorage.removeItem('role');
    this._router.navigate(['/home']);
  }
  getCartItemsLength(){
    let cart = JSON.parse(localStorage.getItem('cart') || '{}');
    this.cartLength = cart.length;
  }
}
