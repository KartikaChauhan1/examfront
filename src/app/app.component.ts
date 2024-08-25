import { Component } from '@angular/core';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignupComponent,
    LoginComponent,
    RouterOutlet,
    RouterLinkActive,
    RouterLink
  ],
  template: '<app-signup></app-signup>',
})
export class AppComponent { }