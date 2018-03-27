import { Injectable } from '@angular/core';
import {Hero} from "../models/hero";
import {HEROES} from "../components/util/mock-heroes";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getHeroes());
      }, 2000);
    });
  }

  getHero(id: number): Observable<Hero> {
    let hero = HEROES.find(hero => hero.id === id);
    return Observable.of(hero);
  }
}
