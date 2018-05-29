import {TestBed} from '@angular/core/testing';

import {HeroService} from './hero.service';
import {HEROES} from "../components/util/mock-heroes";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {createStub} from "../components/util/create-stub";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";
import {Hero} from "../models/hero";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/do";
import "rxjs/add/observable/forkJoin";

describe('HeroService', () => {
  let service: HeroService;
  let mockHttpClient;

  beforeEach(async () => {
    mockHttpClient = createStub(HttpClient);

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HeroService,
        {provide: HttpClient, useValue: mockHttpClient}]
    });
  });

  it('should be created', () => {
    service = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });

  describe('getHeroes', () => {
    beforeEach(() => {
      spyOn(mockHttpClient, 'get').and.returnValue(Observable.of(HEROES));
      service = TestBed.get(HeroService);
    });

    let actual: Hero[];
    it('returns all heroes', () => {
      service.getHeroes().subscribe((resp) => {
        actual = resp;
        expect(actual.length).toEqual(10);

        expect(actual[0].id).toEqual(11);
        expect(actual[0].name).toEqual('Mr. Nice');

        expect(actual[9].id).toEqual(20);
        expect(actual[9].name).toEqual('Tornado');
      });
    });
  });

  describe('getHero', () => {
    beforeEach(() => {
      spyOn(mockHttpClient, 'get').and.returnValue(Observable.of(HEROES[0]));
      service = TestBed.get(HeroService);
    });

    it('returns hero for given id', () => {
      service.getHero(11).subscribe((hero) => {
        expect(hero.id).toEqual(11);
        expect(hero.name).toEqual('Mr. Nice');
      });
    });
  });

  // describe('getHeroesSlowly', () => {
  //   it('returns all heroes', () => {
  //     let expectedHeroes = HEROES;
  //
  //     let actualHereos;
  //     service.getHeroesSlowly().then((resp) => {
  //       actualHereos = resp;
  //       expect(actualHereos).toEqual(expectedHeroes);
  //     });
  //   });
  // });
});
