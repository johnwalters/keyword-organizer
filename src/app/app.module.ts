import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProjectComponent } from './project/project.component';
import { AngularWebStorageModule } from 'angular-web-storage';
import { StorageService } from './storage.service';
import { LocalStorageService } from './localStorageService';
import { KeywordService } from './keyword.service';
import { AppRoutingModule } from './/app-routing.module';
import { ListComponent } from './list/list.component';
import { TotalsComponent } from './totals/totals.component';
import { CellsComponent } from './cells/cells.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProjectComponent,
    ListComponent,
    TotalsComponent,
    CellsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularWebStorageModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [StorageService, LocalStorageService, KeywordService, AngularWebStorageModule]
})
export class AppModule { }
