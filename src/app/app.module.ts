import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HeroesModule} from "./components/heroes/heroes.module";
import {DashboardModule} from "./components/dashboard/dashboard.module";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {HeroService} from "./services/hero.service";
import {HeroDetailModule} from "./components/hero-detail/hero-detail.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    HeroDetailModule,
    HeroesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule {
}
