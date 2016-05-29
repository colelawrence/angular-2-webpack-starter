import { Component }       from '@angular/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated'

import { HeroService } from './hero.service'
import { DashboardComponent } from './dashboard.component'
import { HeroesComponent } from './heroes.component'
import { HeroDetailComponent } from './hero-detail.component'

@Component({
  selector: 'my-app',
  styles: [require('./app.component.css')],
  template: require('./app.component.html'),
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
  ]
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
    component: HeroesComponent,
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent,
  },
])
export class AppComponent {
  title = 'Tour of Heroes'
}