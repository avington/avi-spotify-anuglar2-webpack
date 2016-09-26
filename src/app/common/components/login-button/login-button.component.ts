import {Component, OnInit} from '@angular/core';
import {LoginWindowService} from './login-window.service';

@Component({
  selector: 'login-button',
  styleUrls: ['login-button.scss'],
  template: `
  <button type="button" class="btn success" (click)="login()">Login</button>
`
})
export class LoginButtonComponent implements OnInit {
  constructor(private loginWindow: LoginWindowService) {
  }

  ngOnInit() {
  }

  login = () => {
    this.loginWindow.openLoginWindow();
  }
}
