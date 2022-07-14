import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog,  } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ConfirmComponent } from '../delete-confirm/delete-confirm.component';
import {AddTemplateComponent} from '../add-template/add-template.component';
import {AddCodesComponent} from '../add-codes/add-codes.component';
import {AddCouponComponent} from '../add-coupon/add-coupon.component';
import {ReserveCodesComponent} from '../reserve-codes/reserve-codes.component';


@Component({
  selector: 'app-menue-dialog',
  templateUrl: './menue-dialog.component.html',
  styleUrls: ['./menue-dialog.component.css']
})
export class MenueDialogComponent implements OnInit {


  ngOnInit(): void {
  }

  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  constructor(private readonly dialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(ReserveCodesComponent, {
      restoreFocus: false,
      data: {
        available: 5,
        selected: 0
      }
    });

    dialogRef.afterClosed().subscribe(() => this.menuTrigger?.focus());
  }


  //opens delte dialog
  delete(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ConfirmComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  //opens dialog to add  new templates
  addTemplate() {
    const dialogRef = this.dialog.open(AddTemplateComponent);
    dialogRef.afterClosed().subscribe(() => this.menuTrigger?.focus());
  }

  //opens dialog to add  new codes
  addCodes() {
    const dialogRef = this.dialog.open(AddCodesComponent);
    dialogRef.afterClosed().subscribe(() => this.menuTrigger?.focus());
  }
  
  //returns the Codes as an string array
  getCodes():string[] {
    return ["KHDGS6182", "KHDGS6182", "KHDGS6182"];
  }

  addCoupon() {
    this.dialog.open(AddCouponComponent)
  }


}



