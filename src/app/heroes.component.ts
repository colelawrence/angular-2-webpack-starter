import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router-deprecated'
import { Hero } from './hero'

import { HeroService } from './hero.service'

import '../../public/css/styles.css'

@Component({
  selector: 'my-heroes',
  styles: [require('./heroes.component.css')],
  template: require('./heroes.component.html'),
})

export class HeroesComponent implements OnInit {
  heroes: Hero[]
  title = 'Tour of Heroes'
  selectedHero: Hero
  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  getHeroes() {
    this.heroService.getHeros().then(heroes => this.heroes = heroes)
  }

  ngOnInit() {
    this.getHeroes()
  }

  onSelect(hero: Hero) { this.selectedHero = hero }
  
  gotoSelectedDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }])
  }
  
}
