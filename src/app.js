import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-http-client';
import {Building} from 'cierraloBuilding';

@inject(Building)
export class App {
  constructor() {
    this.buildings = [];
    this.title = 'Propiedades';
    this.message = 'Aurelia JSON';
    let client = new HttpClient();
    client.get('https://demo6292426.mockable.io/c-properties')
      .then(data => {
        JSON.parse(data.response)[Object.keys(JSON.parse(data.response))[0]].forEach((building) => {
          this.addBuilding(building);
        });
      });
  }
  addBuilding(building) {
    this.buildings.push(new Building(building.precio));
    console.log(this.buildings);
  }
}
