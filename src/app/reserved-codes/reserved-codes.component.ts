import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reserved-codes',
  templateUrl: './reserved-codes.component.html',
  styleUrls: ['./reserved-codes.component.css']
})
export class ReservedCodesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  close(){
    this.dialog.closeAll();
  }

}
