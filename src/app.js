import {HttpClient} from 'aurelia-http-client';

export class App {
  constructor() {
    this.message = 'Aurelia JSON';
    let client = new HttpClient();
    client.get('https://demo6292426.mockable.io/c-properties')
      .then(data => {
        console.log(JSON.parse(data.response));
      });
  }
}
