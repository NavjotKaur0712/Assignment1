import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/User';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { UserService } from '../shared/services/user.service';
// import { Observable, observable } from 'rxjs';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: any;
  dataSource: any[];
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'Actions'];
  private url = "https://jsonplaceholder.typicode.com/users";
  //status: any;
  newUser: any;
  dATA: any;

  constructor(private http: HttpClient,
              private router: Router, 
              private _snackBar: MatSnackBar, 
              public dialog: MatDialog, 
              private _getService: UserService) { }

  ngOnInit() {
       this._getService.getUsers()
       .subscribe((response: any) => {
        this.users = response;
        console.log(this.users);
        this.dataSource = this.users;
      })
  }

  onSelect(user: { id: any; }) {
    this.router.navigate(['/users', user.id])
  }

  openDelete(message: string) {
    alert("Are you sure??");
    this._getService.deleteUsers()
      .subscribe((response) => {
        this.users=response;
        console.log(this.users);
       })
       this._snackBar.open(message);
    // this.http.delete<User>("https://jsonplaceholder.typicode.com/users/id")
    //   .subscribe((response) => {
    //     this.users = response;
    //     console.log(this.users);
    //   })
    // this._snackBar.open(message)
  }

  fileNameDialogRef!: MatDialogRef<DialogComponent>;

  openDialog() {
    this.fileNameDialogRef = this.dialog.open(DialogComponent, {
      minHeight: '400px',
      minWidth: '300px',
    });

    this.fileNameDialogRef.afterClosed()
      .subscribe(result => {
        // this.dATA= result;
        console.log('The dialog was closed');
        console.log("101", result);
        console.log("4444", this.dATA);
        this.dataSource.push(result);
        console.log("333", this.dataSource);
      });

  }

}