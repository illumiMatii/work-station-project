import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private _authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this._authService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }
}
