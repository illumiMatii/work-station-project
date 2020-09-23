import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorStr: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onCheckInputs(username: string, password: string, event: any) {
    if (username === '' || password === '') {
      event.preventDefault();
      this.errorStr = 'Wpisz swój login oraz hasło';
    } else if (username === 'admin' && password === 'admin') {
      this.router.navigate(['/user']);
    }
  }
}
