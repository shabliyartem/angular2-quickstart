import {Component, OnInit} from 'angular2/core'
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class DashboardComponent implements OnInit {
  constructor(private _router:Router, private _heroService:HeroService) {
  }

  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0, 4));
  }

  heroes:Hero[] = [];

  gotoDetail(hero:Hero) {
    let link = ['HeroDetail', {id: hero.id}];
    this._router.navigate(link);
  }
}
