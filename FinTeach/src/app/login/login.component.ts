import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/userauth-service'
import {Users} from '../models/users-model'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const { username, email, password } = this.form;
    const user: Users = new Users();
    user.username = username;
    user.password = password;
    user.email = email;

    
    this.authService.create(user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

 
}

