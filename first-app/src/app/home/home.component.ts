import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { inject } from '@angular/core';
import { HousingService } from '../housing.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
      <section>
        <form>
          <input type="text" placeholder="Filter by City">
          <button class="primary" type="button">Search</button>
        </form>
      </section>
      <section class="results">
        <!-- <app-housing-location [housingLocation]="housingLocation"></app-housing-location> -->
        <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation] = "housingLocation"></app-housing-location>
      </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

/*   housingLocation: Housinglocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }; */
}
