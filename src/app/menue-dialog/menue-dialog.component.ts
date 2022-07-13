import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialogRef} from '@angular/material/dialog';


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
    // #docregion focus-restoration
    const dialogRef = this.dialog.open(MenueDialogComponentDialog, {
      restoreFocus: false,
      data: {
        available: 5,
        selected: 0
      }
    });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.

    dialogRef.afterClosed().subscribe(() => this.menuTrigger?.focus());
    // #enddocregion focus-restoration
  }


  delete(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MenueDialogConfirmComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


}

@Component({
  selector: 'menue-dialog',
  templateUrl: './menue-dialog.html'
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
  templateUrl: './menue-dialog-confirm.html',
})
export class MenueDialogConfirmComponent {
  constructor(public dialogRef: MatDialogRef<MenueDialogConfirmComponent>) {}
}