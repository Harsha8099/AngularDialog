import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* export interface DialogData {
  animal: string;
  name: string;
} */

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
  styleUrls: ['dialog-overview-example.css'],
})
export class DialogOverviewExample {
  
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '300px'      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }

}







@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog implements OnInit{
userValidationFormGroup:FormGroup;
showSave:boolean;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private fb:FormBuilder) {}

    ngOnInit(): void {
   this.userValidationFormGroup = this.fb.group({
     userId : ['',Validators.required]
   })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick():void{
    this.showSave = true;
  }

}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */