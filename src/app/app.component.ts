import { AuthService } from './Auth_1/shared/services/auth.service';
import { Component } from '@angular/core';
// import {AuthService}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private authService: AuthService) {}
}
