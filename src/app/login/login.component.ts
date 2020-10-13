import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorStr: string;
  username: string;
  password: string;
  invalidLogin: boolean = false;

  constructor(
    private router: Router,
    private loginService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  checkLogin(event: any) {
    if (this.loginService.authenticate(this.username, this.password)) {
      this.router.navigate([this.username]);
      this.invalidLogin = false;
    } else {
      event.preventDefault();
      this.invalidLogin = true;
      this.errorStr = 'Wpisz swój login oraz hasło';
    }
  }
}
