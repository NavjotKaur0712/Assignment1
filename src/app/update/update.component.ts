import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  data;
  userForm;
  oneUser: any;
  userId;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userForm= new FormGroup({
      id: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      username: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.email,Validators.required])
    });

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
     this.userId= id;
     this.onUpdate(id);
    
  }
 
  onUpdate(id){
    this.http.get<User>("https://jsonplaceholder.typicode.com/users/"+id)
      .subscribe(response =>{
        this.oneUser = response;
        console.log(this.oneUser);
        this.userForm.setValue({
          id: this.oneUser.id,
          name: this.oneUser.name,
          username: this.oneUser.username,
          email: this.oneUser.email,
        })
  })
 }

 onSave(){
  this.http.post<User>("https://jsonplaceholder.typicode.com/users", this.userForm.value)
     .subscribe(response => {
       this.data = response;
       console.log(this.data);
     })
}
}
