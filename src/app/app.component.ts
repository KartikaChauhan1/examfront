import { Component } from '@angular/core';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignupComponent, HttpClientModule],
  template: '<app-signup></app-signup>'
})
export class AppComponent { }