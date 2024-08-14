import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  logins: { username: string; password: string }[] = [
    { username: 'test1', password: 'test1' },
    { username: 'test2', password: 'test2' },
    { username: 'test3', password: 'test3' },
  ];

  username = '';
  password = '';
  error = '';

  submitLogin = () => {
    var user = this.logins.find((e) => e.username == this.username);

    if (!!user && user.password == this.password) {
      this.router.navigateByUrl('/account');
    } else {
      this.error = 'Incorrect login';
    }
  };
}
