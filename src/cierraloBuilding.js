/**
 * Created by enriquelc on 13/05/17.
 */
import {customElement, bindable} from 'aurelia-framework';

@customElement('cierralo-building')
export class Building {
  @bindable to;
  @bindable cheeks;

  speak(){
    alert(`Hello ${this.to}!`);
  }
}
