import {async, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import {HeroService} from './hero.service';
import {HEROES} from "../components/util/mock-heroes";
import {Hero} from "../models/hero";

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
    service = TestBed.get(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getHeroes', () => {
    it('returns all heroes', () => {
      let expectedHeroes = HEROES;

      let actualHereos;
      service.getHeroes().then((resp) => {
        actualHereos = resp;
        expect(actualHereos).toEqual(expectedHeroes);
      });
    });
  });

  describe('getHeroesSlowly', () => {
    it('returns all heroes', () => {
      let expectedHeroes = HEROES;

      let actualHereos;
      service.getHeroesSlowly().then((resp) => {
        actualHereos = resp;
        expect(actualHereos).toEqual(expectedHeroes);
      });
    });
  });

  describe('getHero', () => {
    it('returns hero for given id', () => {
      service.getHero(11).subscribe((hero) => {
        expect(hero.id).toEqual(11);
      });
    });
  });
});
