import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VillageListComponent } from './village-list/village-list.component';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { VillageItemComponent } from './village-item/village-item.component';
import { VillageFilterPipe } from './village-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VillageListComponent,
    TemperaturComponent,
    TeddyBearComponent,
    VillageItemComponent,
    VillageFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
