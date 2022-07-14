import { Component, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'menue-dialog',
  templateUrl: './reserve-codes.component.html',
})
export class ReserveCodesComponent {
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