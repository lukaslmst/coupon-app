import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MenueDialogComponent } from './menue-dialog/menue-dialog.component';
import {AddDialogComponent } from './add-dialog/add-dialog.component';
import { TemplateAddComponent } from './menue-dialog/add-template/add-template.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ButtonSetComponent } from './button-set/button-set.component';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { BottomAlertComponent } from './bottom-alert/bottom-alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BottomAlertAddedComponent } from './bottom-alert-added/bottom-alert-added.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TableComponent,
    MenueDialogComponent,
    AddDialogComponent,
    TemplateAddComponent,
    ButtonSetComponent,
    BottomAlertComponent,
    BottomAlertAddedComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatDialogModule,    
    FormsModule,
    MatButtonModule

  ],
  providers: [MenueDialogComponent,AddDialogComponent,BottomAlertComponent,MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
