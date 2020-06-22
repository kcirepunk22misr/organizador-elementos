import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class BlockLoginGuard implements CanActivate {
  constructor(private _userServices: UserService, private router: Router) {}

  canActivate() {
    if (this._userServices.estaLogueado()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
