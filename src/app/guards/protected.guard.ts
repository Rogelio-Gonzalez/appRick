import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseLoginService } from '../services/firebase-login.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectedGuard implements CanActivate {
  constructor(private fire: FirebaseLoginService, private router : Router){}
  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.fire.isAuthenticated()){
        return true;
      }else{
        this.router.navigateByUrl('/login');
      }
  }
  
}
