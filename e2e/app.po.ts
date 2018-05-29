import {$, browser, ElementFinder} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle(): ElementFinder {
    return $('.toh__title');
  }

  getDashboardLink(): ElementFinder {
    return $('.toh__dashboard');
  }

  getHeroesLink(): ElementFinder {
    return $('.toh__heroes');
  }

  getDashboard(): Dashboard {
    return new Dashboard($('.dashboard'));
  }

  getHeroes(): Heroes {
    return new Heroes($('.heroes'));
  }

  getHeroDetail(): HeroDetail {
    return new HeroDetail($('.hero-detail'));
  }
}

export class Dashboard {
  constructor(public element: ElementFinder) {
  }

  getTitle(): ElementFinder {
    return this.element.$('.dashboard__title');
  }

  getHero(index: number): DashboardHero {
    return new DashboardHero(this.element.$$('.dashboard__hero').get(index));
  }

  clickHero(index: number) {
    this.element.$$('.dashboard__hero').get(index).click();
  }
}

export class DashboardHero {
  constructor(public element: ElementFinder) {
  }

  getName(): ElementFinder {
    return this.element.$('.dashboard__hero-name');
  }
}

export class Heroes {
  constructor(public element: ElementFinder) {
  }

  getTitle(): ElementFinder {
    return $('.heroes__title');
  }

  getHeroesList(): HeroesList {
    return new HeroesList(this.element.$('.heroes__list'));
  }

  getSelectedHero(): SelectedHero {
    return new SelectedHero(this.element.$('.selected-hero'));
  }
}

export class HeroesList {
  constructor(public element: ElementFinder) {
  }

  getHero(index: number): Hero {
    return new Hero(this.element.$$('.heroes__hero').get(index));
  }

  clickHero(index: number) {
    this.element.$$('.heroes__hero').get(index).click();
  }
}

export class Hero {
  constructor(public element: ElementFinder) {
  }

  getId(): ElementFinder {
    return this.element.$('.hero__badge');
  }

  getName(): ElementFinder {
    return this.element.$('.hero__name');
  }
}

export class SelectedHero {
  constructor(public element: ElementFinder) {
  }

  myHero() {
    return this.element.$('.selected-hero__myHero');
  }

  clickViewDetails() {
    this.element.$('.selected-hero__view-details').click();
  }
}

export class HeroDetail {
  constructor(public element: ElementFinder) {
  }

  getTitle() {
    return this.element.$('.hero-detail__title');
  }

  getId() {
    return this.element.$('.hero-detail__id-value');
  }

  getName() {
    return this.element.$('.hero-detail__name-value');
  }

  clickBackButton() {
    this.element.$('.hero-detail__nav-button').click();
  }
}
