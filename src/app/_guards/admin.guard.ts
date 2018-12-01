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
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // let returnValue=false;
    // if(returnValue)
    //   return true;
    // else{
    // this.router.navigate(['/products'],{queryParams:{returnUrl: state.url}});
    // return false;
    return this.auth.user$.pipe(
      take(1),
      map(user => this.userService.gertUser(user.uid).isAdmin),
      tap(isAdmin => {
        if (!isAdmin) {
         // console.error('Access denied - Admins only');
          this.router.navigate(['products']); 
        }
      })
    )
  }
}