import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router: Router) {}

  authenticate(username, password): boolean {
    if (username === username && password === 'password') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(): boolean {
    return !(sessionStorage.getItem('username') === null);
  }

  logout(): void {
    sessionStorage.removeItem('username');
    this.router.navigate(['home']);
  }

  getCurrentUserName() {
    return sessionStorage.getItem('username');
  }
}
