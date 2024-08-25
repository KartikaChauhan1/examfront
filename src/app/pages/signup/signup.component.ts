import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    NavbarComponent
],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  template:'<app-signup></app-signup>',
})
export class SignupComponent {
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  constructor(private userService: UserService,private snack:MatSnackBar){}

  formSubmit() {
    console.log(this.user);
    if (this.user.username === '' || this.user.username == null) {
      this.snack.open('Username is required !!','',{
        duration:3000,
      });
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data:any) => {
        console.log(data);
        //alert('success');
        Swal.fire('Success done!!','User id is' + data.id,'success');
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong!! ','',{
          duration:3000,
        });
      }
    );
  }

  clearForm() {
    this.user = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
  }
  
}