import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataInsightsComponent } from './data-insights/data-insights.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ColumnHeadersComponent } from './column-headers/column-headers.component';

@NgModule({
  declarations: [
    AppComponent,
    DataInsightsComponent,
    PageHeaderComponent,
    MainContentComponent,
    ColumnHeadersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
