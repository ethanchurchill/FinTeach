//This class defines the HTTP service for the Users table in the DB
//Various queries are defined as well as API endpoints
//These are used by components in the src/app folder
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users-model';
//B ase URL for the user table
const baseUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //API endpoint for Retrieving all users
  getAll(): Observable<Users[]> {
    return this.http.get<Users[]>(baseUrl);
  }
  //API endpoint for retrieving users based on user id
  get(id: any): Observable<Users> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  //API endpoint to create a new user with the info in  the body of the request
  create(data: any): Observable<any> {
      console.log("got here");
      
    return this.http.post(baseUrl, data);
    
  }

}
