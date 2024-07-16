import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

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

  constructor(private userService: UserService) {}

  formSubmit() {
    console.log(this.user);
    if (this.user.username === '' || this.user.username == null) {
      alert('Username is required !!');
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('User created successfully');
      },
      (error) => {
        console.error('Error:', error);
        alert('Something went wrong: ' + error);
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