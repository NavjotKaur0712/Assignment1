import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {
  oneUser: any;
  userId;

  

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
     this.userId= id;
     this.getMethod(id);
    
  }

  getMethod(id){
    this.http.get<User>("https://jsonplaceholder.typicode.com/users/"+id)
      .subscribe(response =>{
        this.oneUser = response;
        console.log(this.oneUser);
  })
 

}
}
