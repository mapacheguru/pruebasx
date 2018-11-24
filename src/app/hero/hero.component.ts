import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
 /* hero: Hero = {
    id: 1,
    name: 'valeria'
  };*/
  heroes = HEROES;
 selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }
}

