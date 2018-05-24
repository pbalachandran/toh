import {fakeAsync, TestBed} from '@angular/core/testing';
import {AppRoutingModule} from "./app-routing.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HeroDetailComponent} from "../components/hero-detail/hero-detail.component";
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {HeroesComponent} from "../components/heroes/heroes.component";
import {Router} from "@angular/router";
import {AppModule} from "../app.module";

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

let router;
describe('AppRouting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, AppModule, RouterTestingModule.withRoutes(routes)],
      providers: []
    }).compileComponents();

    router = TestBed.get(Router);
    router.initialNavigation();
  });

  describe('routing', () => {
    it('navigates to /dashboard by default', fakeAsync(() => {
      router.navigateByUrl('/').then(() => {
        expect(router.url).toEqual('/dashboard');
      });
    }));

    it('navigates to /dashboard', fakeAsync(() => {
      router.navigateByUrl('/dashboard').then(() => {
        expect(router.url).toEqual('/dashboard');
      });
    }));

    it('navigates to /heroes', fakeAsync(() => {
      router.navigateByUrl('/heroes').then(() => {
        expect(router.url).toEqual('/heroes');
      });
    }));
  });
});
