import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HeroesModule} from "./components/heroes/heroes.module";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {RouterModule} from "@angular/router";
import {DashboardModule} from "./components/dashboard/dashboard.module";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";
import {AppRoutingModule} from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    DashboardModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
