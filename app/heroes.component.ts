import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service'

@Component({
  selector: 'heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  constructor(private _router: Router, private _heroService:HeroService) {
  }

  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  heroes:Hero[] = [];
  selectedHero:Hero;

  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }

  gotoDetail(hero:Hero) {
    this._router.navigate(['HeroDetail', {id: hero.id}]);
  }
}
