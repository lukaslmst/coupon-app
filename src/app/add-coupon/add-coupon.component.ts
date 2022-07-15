import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BottomAlertComponent } from '../bottom-alert/bottom-alert.component';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  constructor(public dialog: MatDialog, public alert: BottomAlertComponent) {}

  ngOnInit(): void {
  }
  

  closeDialog() {
    this.dialog.closeAll();
  }

  add() {
    this.dialog.closeAll();
    //if true => add coupon to DB then:
    this.alert.openSnackBar("Gutscheinart erfoglreich hinzugefügt");

    //else 
    //this.alert.openSnackBar("Gutscheinart konnte nicht hinzugefügt werden!");
  }


}
