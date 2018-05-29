import {TestBed, async} from '@angular/core/testing';
import {Hero} from "../../models/hero";
import {HeroesModule} from "./heroes.module";
import {HeroesComponent} from "./heroes.component";
import {createStub} from "../util/create-stub";
import {HeroService} from "../../services/hero.service";
import {Observable} from "rxjs/Observable";

describe('HeroesComponent', () => {

  let fixture, component;
  let mockHeroService;
  beforeEach(async(() => {
    mockHeroService = createStub(HeroService);

    TestBed.configureTestingModule({
      imports: [
        HeroesModule
      ],
      providers: [
        {provide: HeroService, useValue: mockHeroService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    let heroes = [
      {
        id: 1,
        name: 'Mr.Nice'
      },
      {
        id: 2,
        name: 'Narco'
      },
      {
        id: 3,
        name: 'Bombasto'
      },
      {
        id: 4,
        name: 'Celeritas'
      },
      {
        id: 5,
        name: 'Magneta'
      },
      {
        id: 6,
        name: 'RubberMan'
      },
      {
        id: 7,
        name: 'Dynama'
      },
    ];

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.debugElement.componentInstance;
    spyOn(mockHeroService, 'getHeroes').and.returnValue(Observable.of(heroes));
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should retrieve all heroes', async(() => {
    fixture.whenStable().then(() => {
      expect(component.heroes.length).toEqual(7);
    });
  }));

  describe('onSelect', () => {
    let selectedHero: Hero = {id: 13, name: 'Bombasto'}
    beforeEach(() => {
      component.onSelect(selectedHero);
    });

    it('should initialize hero to selected hero', () => {
      expect(component.selectedHero).toEqual(selectedHero);
    });
  })
});
