import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProjectComponent } from './project/project.component';
import { AngularWebStorageModule } from 'angular-web-storage';
import { StorageService } from './storage.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularWebStorageModule
  ],
  bootstrap: [AppComponent],
  providers: [StorageService, AngularWebStorageModule]
})
export class AppModule { }
