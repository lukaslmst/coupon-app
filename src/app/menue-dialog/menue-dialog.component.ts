import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialogRef } from '@angular/material/dialog';
import { TableComponent } from '../table/table.component';
import { ButtonSetComponent } from '../button-set/button-set.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import {BottomAlertComponent} from '../bottom-alert/bottom-alert.component';


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


  //opens menue dialog
  openDialog() {
    const dialogRef = this.dialog.open(MenueDialogComponentDialog, {
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
    this.dialog.open(MenueDialogConfirmComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  //opens dialog to add  new templates
  addTemplate() {
    const dialogRef = this.dialog.open(MenueDialogAddTemplateComponent);
    dialogRef.afterClosed().subscribe(() => this.menuTrigger?.focus());
  }

  //opens dialog to add  new codes
  addCodes() {
    const dialogRef = this.dialog.open(MenueDialogAddCodesComponent);
    dialogRef.afterClosed().subscribe(() => this.menuTrigger?.focus());
  }
  
  //returns the Codes as an string array
  getCodes():string[] {
    return ["KHDGS6182", "KHDGS6182", "KHDGS6182"];
  }

}

//Dialog for Code reservation
@Component({
  selector: 'menue-dialog',
  templateUrl: './reserve/menue-dialog-reserve.html',
})
export class MenueDialogComponentDialog {
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { available: number, selected: number }) { }


  closeDialog() {
    this.dialog.closeAll();
  }

  
  inc() {
    if (this.data.selected >= 0 && this.data.available > 0) {
      console.log("before available:" + this.data.available);
      this.data.selected++;
      this.data.available--;
      console.log("after available:" + this.data.available);

    }
  }

  dec() {
    if (this.data.available >= 0 && this.data.selected > 0) {
      this.data.available++;
      this.data.selected--;
      console.log("available: " + this.data.available);
    }
  }
}



@Component({
  selector: 'menue-dialog-confirm',
  templateUrl: './confirm/menue-dialog-confirm.html',
})

//delte a Coupon
export class MenueDialogConfirmComponent {
  constructor(public dialogRef: MatDialogRef<MenueDialogConfirmComponent>, public alert: BottomAlertComponent) { }

  delete() {
    this.dialogRef.close(true);
    this.alert.openSnackBar();
  }

  cancel() {
    this.dialogRef.close(false);
  }

}

//Add new Template
@Component({
  selector: 'menue-dialog-add-template',
  templateUrl: './add-template/add-template.component.html',
})

export class MenueDialogAddTemplateComponent {
  constructor(public dialog: MatDialog) { }

  
}

//Add new Codes
@Component({
  selector: 'form-field-overview-example',
  templateUrl: './add-codes/add-codes.component.html',
})
export class MenueDialogAddCodesComponent {

}

