import {Component, OnInit} from '@angular/core';
import {Hero} from "../../models/hero";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero = null;

  constructor(private heroService:HeroService,) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then((resp) => {
      this.heroes = resp;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
