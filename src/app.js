export class App {
  constructor() {
    this.message = 'Aurelia JSON';
    let client = new HttpClient();
    client.get('package.json')
      .then(data => {
        console.log(data.description)
      });
  }
}
