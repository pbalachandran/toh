import {NgModule} from '@angular/core';
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {HeroDetailComponent} from "../components/hero-detail/hero-detail.component";
import {RouterModule} from "@angular/router";
import {HeroesComponent} from "../components/heroes/heroes.component";

const routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
