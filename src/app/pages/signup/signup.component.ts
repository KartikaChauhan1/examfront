import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { error } from 'console';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule
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

  constructor(private http: HttpClient, private userService: UserService) {}

  formSubmit() {
    console.log(this.user);
    if (this.user.username === '' || this.user.username == null) {
      alert('Username is required !!');
      return;
    }
    // Example usage of userService
    this.userService.addUser(this.user).subscribe(
      (data)=> {
        //success 
        console.log(data);
        alert('success');
      },
      (error)=> {
        console.log(error);
        alert('something went wrong');
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