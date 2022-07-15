import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

/**
 * @title Snack-bar with a custom component
 */
@Component({
  selector: 'snack-bar-component-example',
  templateUrl: 'bottom-alert.component.html'
})
export class BottomAlertComponent {

  durationInSeconds = 3.5;

  constructor(private _snackBar: MatSnackBar) {
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }
}





/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */