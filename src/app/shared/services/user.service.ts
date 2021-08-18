import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { User } from '../models/User';
import userList from '../mockData/userList.json'

@Injectable({
  providedIn: 'root'
})
export class UserService {

   mockDataEnabled = false;
   listes: Array<object> = userList.data;

  private url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  getUsers(){ 
    //  return this.http.get<User[]>(this.url);
     if (this.mockDataEnabled) {
      console.log(this.listes);
      return of(this.listes);
    }
    else {
      return this.http.get<User[]>(this.url);
    }
  }

  deleteUsers(){
    return this.http.delete<User>("https://jsonplaceholder.typicode.com/users/id");
}
}
