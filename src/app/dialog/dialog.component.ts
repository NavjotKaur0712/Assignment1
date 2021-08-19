import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  userForm: FormGroup;
  userss: any;
  data: any;
  user:any;
 
constructor( private http: HttpClient,  private fileNamedialogRef: MatDialogRef<DialogComponent> ){}
  
  ngOnInit(){
      this.userForm= new FormGroup({
      id: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      username: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.email,Validators.required]),
      });
    }
  
      onSave(){
        this.http.post<User>("https://jsonplaceholder.typicode.com/users", this.userForm.value)
           .subscribe(response => {
             this.userss = response;
             console.log(this.userss);
           })
          //  this.data= this .userForm.value;
           this.fileNamedialogRef.close( this.userForm.value);
      }
  

     
  }

 
  


