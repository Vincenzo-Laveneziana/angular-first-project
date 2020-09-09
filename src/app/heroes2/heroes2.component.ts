import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES2 } from '../mock-heroes2';

@Component({
  selector: 'app-heroes2',
  templateUrl: './heroes2.component.html',
})
export class Heroes2Component implements OnInit {

  heroes = HEROES2;
  selectedHero: Hero;

  constructor() {}

  ngOnInit(): void {
  }

}
