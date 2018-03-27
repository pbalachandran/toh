import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {HeroService} from "../../services/hero.service";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [HeroService]
})
export class DashboardModule { }
