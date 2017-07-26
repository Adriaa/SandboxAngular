import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BugComponent } from './bug/bug.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugService } from './bug.service';
import { ChartComponent } from './chart/chart.component';
import { AppRoutingModule } from './app-routing.module';

// Import the library
import { FusionChartsModule } from 'angular2-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';
// Import FusionCharts Charts module
import * as Charts from 'fusioncharts/fusioncharts';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BugComponent,
    BugsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FusionChartsModule.forRoot(FusionCharts, Charts)
  ],
  providers: [BugService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
