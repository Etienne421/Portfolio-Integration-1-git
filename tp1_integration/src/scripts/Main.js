import Preview from "./Preview";
import Form from './Form';
class Main {


  constructor() {
    console.log('TimTools IN MOTION');

    new Preview(document.querySelector('.js-preview'));
    new Form(document.querySelector('.form'));
  }
}

new Main();
