import {AppPage} from './app.po';
import {browser} from "protractor";

describe('toh App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
  });

  describe('when page renders', () => {
    it('should display welcome message', () => {
      expect(page.getTitle().getText()).toEqual('Tour of Heroes');
    });

    it('should show links for Dashboard & Heroes', () => {
      expect(page.getDashboardLink().getText()).toEqual('Dashboard');
      expect(page.getHeroesLink().getText()).toEqual('Heroes');
    });

    it('should list top heroes from dashboard', () => {
      expect(page.getDashboard().getHero(1).getName().getText()).toEqual('Bombasto');
    });
  });

  describe('when a hero is selected from the dashboard on landing page', () => {
    beforeAll(() => {
      page.getDashboard().clickHero(1);
    });

    it('should display details', () => {
      expect(page.getHeroDetail().getTitle().getText()).toEqual('Bombasto details!');
      expect(page.getHeroDetail().getId().getText()).toEqual('13');
      expect(page.getHeroDetail().getName().getAttribute('value')).toEqual('Bombasto');
    });

    it('should navigate to dashboard view, when back button is clicked', () => {
      page.getHeroDetail().clickBackButton();
      expect(browser.getCurrentUrl()).toContain('/dashboard');
    });
  });

  describe('when Heroes link is clicked on the landing page', () => {
    beforeAll(() => {
      page.getHeroesLink().click();
    });

    it('should display title', () => {
      expect(page.getHeroes().getTitle().getText()).toEqual('My Heroes');
    });

    it('should display all heroes', () => {
      let heroesList = page.getHeroes().getHeroesList();
      expect(heroesList.getHero(0).getName().getText()).toEqual('Mr. Nice');
      expect(heroesList.getHero(1).getName().getText()).toEqual('Narco');
      expect(heroesList.getHero(2).getName().getText()).toEqual('Bombasto');
      expect(heroesList.getHero(3).getName().getText()).toEqual('Celeritas');
      expect(heroesList.getHero(4).getName().getText()).toEqual('Magneta');
      expect(heroesList.getHero(5).getName().getText()).toEqual('RubberMan');
      expect(heroesList.getHero(6).getName().getText()).toEqual('Dynama');
      expect(heroesList.getHero(7).getName().getText()).toEqual('Dr IQ');
      expect(heroesList.getHero(8).getName().getText()).toEqual('Magma');
      expect(heroesList.getHero(9).getName().getText()).toEqual('Tornado');
    });

    describe('when a hero is selected', () => {
      beforeAll(() => {
        page.getHeroes().getHeroesList().clickHero(9);
      });

      it('should display selected hero\'s as my hero', () => {
        expect(page.getHeroes().getSelectedHero().myHero().getText()).toEqual('TORNADO is my hero');
      });

      describe('view details', () => {
        beforeAll(() => {
          page.getHeroes().getSelectedHero().clickViewDetails();
        });

        it('should display details of the selected hero, when view details is clicked', () => {
          expect(page.getHeroDetail().getTitle().getText()).toEqual('Tornado details!');
          expect(page.getHeroDetail().getId().getText()).toEqual('20');
          expect(page.getHeroDetail().getName().getAttribute('value')).toEqual('Tornado');
        });

        describe('navigate to dashboard view', () => {
          beforeEach(() => {
            page.getHeroDetail().clickBackButton();
          });

          it('should navigate back, when back button is clicked', () => {
            expect(browser.getCurrentUrl()).toContain('/dashboard');
          });
        });
      });
    });
  });
});
