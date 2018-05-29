import {Injectable} from '@angular/core';
import {Hero} from "../models/hero";
import {HEROES} from "../components/util/mock-heroes";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";
import {environment} from "../../environments/environment";

@Injectable()
export class HeroService {

  private heroes: Hero[];

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(environment.heroservice_url + '/api/heroes');
  }

  getHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(environment.heroservice_url + '/api/hero/' + id);
  }

  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(this.getHeroes());
  //     }, 2000);
  //   });
  // }
}
