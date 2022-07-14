import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { BottomAlertComponent } from "../bottom-alert/bottom-alert.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'menue-dialog-confirm',
  templateUrl: '../delete-confirm/delete-confirm.component.html',
})

//delte a Coupon
export class ConfirmComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmComponent>, public alert: BottomAlertComponent) { }

  delete() {
    this.dialogRef.close(true);
    this.alert.openSnackBar();
  }

  cancel() {
    this.dialogRef.close(false);
  }

}

