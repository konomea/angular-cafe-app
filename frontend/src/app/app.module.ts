import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';

import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPageComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
