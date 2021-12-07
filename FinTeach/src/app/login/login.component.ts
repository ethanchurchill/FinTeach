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
  users: Users[];
  username = '';
  email = '';
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  displayInfo: boolean = false;

  constructor(private authService: AuthService) { }
  //Runs on page initialization
  ngOnInit(): void {
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const username = currentUser.username;
    console.log(currentUser);
    this.retrieveUsers();
    if(username != 'username') {
      this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.displayInfo = true;
    }
    else {
      this.isSuccessful = false;
      this.isSignUpFailed = false;
    }
    if(this.displayInfo == true) {
      this.username = currentUser.username;
      this.email = currentUser.email;
       
    }
  }
  logout(): void {
    const cleared = {
      username: 'username',
      password: 'password',
      email: 'email'
    };
    localStorage.setItem('currentUser', JSON.stringify(cleared));
    this.isSuccessful = false;
    this.isSignUpFailed = false;
    this.displayInfo = false; 
  }
  retrieveUsers(): void {
    this.authService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  //Method that is called when the form is submitted
  onSubmit(): void {
    //Extracts info from the form and assigns it to user variable
  
    const { username, email, password } = this.form;
    const user: Users = new Users();
    user.username = username;
    user.password = password;
    user.email = email;
    const dataNew = {
      username: username,
      password: password,
      email: email
    };

 
    if(dataNew.username == null || dataNew.password == null || dataNew.email == null) {
        return;
    }

    for (let i = 0; i < this.users.length; i++) {
      const currUser = this.users[i].username
      if(username == currUser) {
        return;
      }
     }

    //Creates a user using the form info with the Auth Service
    this.authService.create(dataNew).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        localStorage.setItem('currentUser', JSON.stringify(data));
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        this.displayInfo = true;
        window.location.reload();
        console.log(currentUser);
      },
      err => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
        console.log(dataNew.email);
        this.isSignUpFailed = true;
        this.isSuccessful = false;
      }
    );
  }

  onLogin() : void {
    const { username, email, password } = this.form;
    const user: Users = new Users();
    user.username = username;
    user.password = password;
    user.email = email;
    const dataNew = {
      username: username,
      password: password,
      email: email
    };
    this.authService.getFromUsername(username).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        localStorage.setItem('currentUser', JSON.stringify(data[0]));
        window.location.reload();
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        this.displayInfo = true;
      },
      err => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);

      }
    );

  }

 
}

