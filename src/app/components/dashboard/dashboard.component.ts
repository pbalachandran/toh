import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../models/hero";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedHero: Hero = null;
  heroes: Hero[] = [];
  constructor(private heroService:HeroService){}

  ngOnInit() {
    this.heroService.getHeroes().subscribe((resp) => {
      this.heroes = resp.slice(1, 5);
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
