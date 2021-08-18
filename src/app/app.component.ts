import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  fileNameDialogRef!: MatDialogRef<DialogComponent>;
  constructor(public dialog: MatDialog) {}
  
  openDialog() {
    this.fileNameDialogRef = this.dialog.open(DialogComponent,{
      minHeight:'400px',
      minWidth:'300px'
    });
   
  }
}
