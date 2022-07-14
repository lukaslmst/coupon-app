import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-coupon.component.html',
})
export class AddCouponComponent {
 
  constructor(public dialog: MatDialog) {}

  closeDialog() {
    this.dialog.closeAll();
  }

}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that

    can be found in the LICENSE file at https://angular.io/license */