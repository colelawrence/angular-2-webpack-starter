import { Component, OnInit } from '@angular/core'
import { HeroDetailComponent } from './hero-detail.component'
import { Hero } from './hero'

import { HeroService } from './hero.service'

import '../../public/css/styles.css'

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [HeroDetailComponent],
  providers: [HeroService],
})

export class AppComponent implements OnInit {
  heroes: Hero[]
  title = 'Tour of Heroes'
  selectedHero: Hero
  constructor(private heroService: HeroService) {}
  ngOnInit() {
    this.getHeroes()
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero
  }
  getHeroes() {
    this.heroService.getHeros().then(heroes => this.heroes = heroes)
  }
}
