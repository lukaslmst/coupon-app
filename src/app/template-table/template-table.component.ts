import {Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TableItem } from '../table/table-datasource';
import {Template} from '../modules/template';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['template-table.component.css'],
  templateUrl: 'template-table.component.html',
})
export class TemplateTableComponent {

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
@ViewChild(MatTable) table!: MatTable<TableItem>;

/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
displayedColumns = ['Vorlage', 'Preisgruppe'];
ds!: MatTableDataSource<Template>;
templates: Template[] = [];


ngOnInit(): void {
  this.templates.push(new Template(1015, '01-M'));
  this.templates.push(new Template(1015, '01-M'));
  this.templates.push(new Template(1015, '01-M'));
  this.templates.push(new Template(1015, '01-M'));
  this.ds = new MatTableDataSource(this.templates);
}

}
