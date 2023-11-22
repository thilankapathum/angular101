import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';

@Component({

  // Angular metadata:

  // selector identifies this component(ie: heroes) within parent component's(ie:app) HTML template
  selector: 'app-heroes', 
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  /* hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }; */

  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  heroes = HEROES;

}