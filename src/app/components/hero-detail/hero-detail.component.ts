import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../models/hero";
import {HeroService} from '../../services/hero.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements  OnInit {


  @Input()
  hero: Hero;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe((hero) => {
        this.hero = hero
      });
  }

  navigateToDashboard() {
    return this.router.navigateByUrl('/dashboard');
  }
}
