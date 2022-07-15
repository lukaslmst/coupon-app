import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BottomAlertComponent } from '../bottom-alert/bottom-alert.component';

@Component({
  selector: 'app-add-codes',
  templateUrl: './add-codes.component.html',
  styleUrls: ['./add-codes.component.css']
})
export class AddCodesComponent implements OnInit {

  constructor(public dialog: MatDialog, public alert: BottomAlertComponent) {}

  ngOnInit(): void {
  }
  

  closeDialog() {
    this.dialog.closeAll();
  }

  add() {
    this.dialog.closeAll();
    //if true => add coupon to DB then:
    this.alert.openSnackBar("Codes erfoglreich hinzugefügt");

    //else 
    //this.alert.openSnackBar("Codes konnte nicht hinzugefügt werden!");
  }
}
