import { Dialog } from '@angular/cdk/dialog';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MenueDialogComponent } from '../menue-dialog/menue-dialog.component';
import { Coupons } from '../modules/gutschein';
import { TableDataSource, TableItem } from './table-datasource';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'isActive', 'toggle', 'menue'];
  ds!: MatTableDataSource<Coupons>;
  coupons: Coupons[] = [];


  ngOnInit(): void {
    this.coupons.push(new Coupons("Netflix", true));
    this.coupons.push(new Coupons("Spotify", false));
    this.coupons.push(new Coupons("Amazon", true));
    this.coupons.push(new Coupons("Apple", false));
    this.ds = new MatTableDataSource(this.coupons);
  }

  constructor(private readonly dialog: MenueDialogComponent,
    private readonly addDialog: AddDialogComponent) {

  }

  textColor = "gray";


  reservieren() {
    this.dialog.openDialog();
  }

  addCoupon() {
    this.addDialog.openDialog();
  }

  delete() {
    this.dialog.delete("0.0s", "0.0s");
  }

  addTemplate() {
    this.dialog.addTemplate();
  }

  addCodes() {
    this.dialog.addCodes();
  }





}

