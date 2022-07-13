import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


/**
 * @title Dialog elements
 */
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
})
export class AddDialogComponent {


  constructor(public dialog: MatDialog) {}


  openDialog() {
    this.dialog.open(AddDialogOpenComponent);
  }
}

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog-open.component.html',
})
export class AddDialogOpenComponent {

  constructor(public dialog: MatDialog) {}

  closeDialog() {
    this.dialog.closeAll();
  }

}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */