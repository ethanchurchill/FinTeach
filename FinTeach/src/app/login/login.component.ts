//Class defining the Login Component
//This component deals with extracting user info from the html
//It then sends the info to the backend to create a user
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/userauth-service'
import {Users} from '../models/users-model'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Form control for the frontend
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }
  //Runs on page initialization
  ngOnInit(): void {
  }
  //Method that is called when the form is submitted
  onSubmit(): void {
    //Extracts info from the form and assigns it to user variable
    const { username, email, password } = this.form;
    const user: Users = new Users();
    user.username = username;
    user.password = password;
    user.email = email;

    //Creates a user using the form info with the Auth Service
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

