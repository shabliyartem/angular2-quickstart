import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroService}     from './hero.service';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/hero/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }
])
export class AppComponent {
  title:String = 'Tour of heroes'
}
