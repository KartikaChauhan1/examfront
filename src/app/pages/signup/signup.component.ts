import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  };

  constructor(private http: HttpClient) {}

  formSubmit() {
    console.log('Form submitted', this.user);
    // Send the data to the backend
    this.http.post('YOUR_BACKEND_API_URL', this.user).subscribe(
      (response) => {
        console.log('Registration successful', response);
        alert('Registration successful!');
      },
      (error) => {
        console.error('Registration failed', error);
        alert('Registration failed. Please try again.');
      }
    );
  }

  clearForm() {
    this.user = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    };
  }
}