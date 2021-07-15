 import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingguardService implements CanActivate {
  canActivate(routes:ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    let name="shadab";
    if (name=="shadab") {
      return true;
    } else {
      return false
    }
  }

  constructor() { }
}
