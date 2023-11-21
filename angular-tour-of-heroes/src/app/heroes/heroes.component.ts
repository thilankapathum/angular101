import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';

@Component({

  // Angular metadata:

  // selector identifies this component(ie: heroes) within parent component's(ie:app) HTML template
  selector: 'app-heroes', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

}