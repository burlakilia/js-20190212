import { Block } from '../block'
import { Galarey } from '../galarey/galarey'
import { Button } from '../button/button'
import template from './themes.pug'
/* eslint-disable */
import _ from "./themes.scss"
/* eslint-enable */

export class Themes extends Block {
  get bemName () {
    return 'themes';
  }
  template (data) {
    return template(data);
  }

  constructor (options) {
    super(options);
    this.galarey = new Galarey({
      images: [{
        src: './img/black.jpg',
        description: 'Black Theme',
        selected: false,
        data: 'black'
      }, {
        src: './img/blue.jpg',
        description: 'Blue Theme',
        selected: true,
        data: 'blue'
      }, {
        src: './img/green.jpg',
        description: 'Green Theme',
        selected: false,
        data: 'green'
      }, {
        src: './img/red.jpg',
        description: 'Red Theme',
        selected: false,
        data: 'red'
      }]
    });
    this.button = new Button({
      name: 'submit',
      value: 'Сохранить',
      type: 'submit'
    });
  }

  render (el) {
    super.render(el);
    this.galarey.render(this.getElement('galarey'));
    this.galarey.run();
    this.button.render(this.getElement('submit'));

    this.el.addEventListener('submit', event => {
      event.preventDefault();
      console.log(this.galarey.selectedItem.dataset.theme);
    });
  }
}
