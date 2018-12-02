import { AppUser } from './../models/app-user';
import { UserService } from './../_services/user.service';
import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService, private router: Router) { }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return this.auth.user$
  //   .pipe(switchMap(user => this.userService.gertUser(user.uid).valueChanges()))
  //   .pipe(map(AppUser => AppUser.isAdmin))
  // }
  canActivate(): Observable<boolean> {
    return this.auth.user$.pipe(switchMap(user => 
    this.userService.gertUser(user.uid))).pipe(map((appUser :any) => appUser.isAdmin));
 }
}