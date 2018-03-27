import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";
import {HeroDetailModule} from "../hero-detail/hero-detail.module";
import {HeroService} from "../../services/hero.service";
import {HeroesComponent} from "./heroes.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroDetailModule,
    RouterModule
  ],
  exports: [HeroesComponent],
  providers: [HeroService],
})
export class HeroesModule { }
