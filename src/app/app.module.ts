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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { BottomAlertComponent } from './bottom-alert/bottom-alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddCodesComponent } from './add-codes/add-codes.component';
import { ReserveCodesComponent } from './reserve-codes/reserve-codes.component';
import { ConfirmComponent } from './delete-confirm/delete-confirm.component';
import { AddCouponComponent } from './add-coupon/add-coupon.component';




@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MenueDialogComponent,
    BottomAlertComponent,
    AddCodesComponent,
    ReserveCodesComponent,
    ConfirmComponent,
    TableComponent

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
    MatCardModule
     

  ],
  providers: [MenueDialogComponent,BottomAlertComponent,MatSnackBar,AddCodesComponent,AddCouponComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
