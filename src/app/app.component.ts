import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  title = 'Tour of Heroes';

  constructor(private router: Router) {
  }

  navigateToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  navigateToHeroes() {
    return this.router.navigateByUrl('/heroes');
  }
}
