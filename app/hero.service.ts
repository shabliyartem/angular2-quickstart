import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHero(id:number) {
    let hero = _.find(HEROES, {id: id});
    return Promise.resolve(hero);
  }
}
