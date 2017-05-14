/**
 * Created by enriquelc on 13/05/17.
 */
import {customElement, bindable} from 'aurelia-framework';

@customElement('cierralo-building')
export class Building {
  @bindable building;

  constructor (precio) {
    this.precio = precio;
  }
}
