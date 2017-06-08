import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BugComponent } from './bug/bug.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugService } from './bug.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BugComponent,
    BugsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BugService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
