import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
  getHeros() {
    return Promise.resolve(HEROES)
  }
}