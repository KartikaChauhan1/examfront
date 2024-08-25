import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from '../signup/signup.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    SignupComponent,
    MatCardModule
  ],
  template: `
    <mat-card>
      <mat-form-field>
        <mat-label>Username</mat-label>
        <input matInput placeholder="Enter your username">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Password</mat-label>
        <input matInput placeholder="Enter your password" type="password">
      </mat-form-field>
      <!-- Include the SignupComponent here -->
      <app-signup></app-signup>
    </mat-card>
  `
})
export class LoginComponent { }
