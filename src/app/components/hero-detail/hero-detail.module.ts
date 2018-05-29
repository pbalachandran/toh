import {NgModule} from '@angular/core';
import {CommonModule, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {HeroDetailComponent} from './hero-detail.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HeroDetailComponent],
  exports: [HeroDetailComponent],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}
              ]
})
export class HeroDetailModule {
}
