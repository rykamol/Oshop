import { AuthService } from './../sevices/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


// tslint:disable-next-line:no-unused-expression

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user$: any;
  constructor(private auth: AuthService, private router: Router) {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
