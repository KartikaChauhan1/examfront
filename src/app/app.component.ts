import { Component } from '@angular/core';
import { SignupComponent } from './pages/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignupComponent],
  template: '<app-signup></app-signup>'
})
export class AppComponent { }