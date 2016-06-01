import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router-deprecated'
import { Hero } from './hero'

import { HeroService } from './hero.service'
import { HeroDetailComponent } from './hero-detail.component'

@Component({
  selector: 'my-heroes',
  styles: [require('./heroes.component.css')],
  template: require('./heroes.component.html'),
  directives: [HeroDetailComponent],
})

export class HeroesComponent implements OnInit {
  heroes: Hero[]
  title = 'Tour of Heroes'
  selectedHero: Hero
  addingHero = false
  error: any
  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  getHeroes() {
    this.heroService.getHeros().then(heroes => this.heroes = heroes)
  }

  addHero() {
    this.addingHero = true
    this.selectedHero = null
  }

  close(savedHero: Hero) {
    this.addingHero = false
    if (savedHero) {
      this.getHeroes()
    }
  }

  delete(hero: Hero, event: any) {
    event.stopPropagation()
    this.heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero)
        if (this.selectedHero === hero) {
          this.selectedHero = null
        }
      })
      .catch(error => this.error = error)
  }

  ngOnInit() {
    this.getHeroes()
  }

  onSelect(hero: Hero) { this.selectedHero = hero }

  gotoSelectedDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }])
  }

}
