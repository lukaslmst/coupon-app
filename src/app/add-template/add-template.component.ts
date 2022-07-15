import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BottomAlertComponent } from '../bottom-alert/bottom-alert.component';

export interface PeriodicElement {
  vorlage: string;
  preisgruppe: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
 {vorlage: '1015', preisgruppe: '01-M'},
 {vorlage: '1015', preisgruppe: '01-M'},
 {vorlage: '1015', preisgruppe: '01-M'},
 {vorlage: '1015', preisgruppe: '01-M'},
 {vorlage: '1015', preisgruppe: '01-M'},
 {vorlage: '1015', preisgruppe: '01-M'},

];

/**
 * @title Use of `mat-text-column` which can be used for simple columns that only need to display
 * a text value for the header and cells.
 */
@Component({
  selector: 'table-text-column-example',
  styleUrls: ['add-template.component.css'],
  templateUrl: 'add-template.component.html',
})
export class AddTemplateComponent {
  displayedColumns: string[] = ['vorlage', 'preisgruppe'];
  dataSource = ELEMENT_DATA;

  
  constructor(public dialog: MatDialog, public alert: BottomAlertComponent) {}

  ngOnInit(): void {
  }
  

  closeDialog() {
    this.dialog.closeAll();
  }

  add() {
    this.dialog.closeAll();
    //if true => add template to DB then:
    this.alert.openSnackBar("Template erfoglreich hinzugefügt");

    //else 
    //this.alert.openSnackBar("Template konnte nicht hinzugefügt werden!");
  }





}