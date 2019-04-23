import { Block } from '../block'
import template from './galarey.pug'
/* eslint-disable */
import _ from "./galarey.scss"
/* eslint-enable */

export class Galarey extends Block {
  get bemName () {
    return 'galarey';
  }
  template (data) {
    return template(data);
  }
  run () {
    let amount = this.options.images.length;
    let heightCoord = 300;
    const rowStyle = document.getElementById('inRow');
    document.getElementById('btn__more').onclick = function () {
      if (heightCoord >= ((amount / 3) * 300)) {
        return;
      }
      heightCoord = heightCoord + 300;
      rowStyle.style.height = heightCoord + 'px';
    };
    document.getElementById('btn__hidden').onclick = function () {
      heightCoord = 300;
      rowStyle.style.height = heightCoord + 'px';
    };

    this.selectedItem = this.el.querySelector('.galarey__image_selected');

    this.el.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.tagName === 'IMG') {
        if (this.selectedItem !== event.target) {
          event.target.classList.toggle('galarey__image_selected');
          this.selectedItem.classList.toggle('galarey__image_selected', false);
        }
      }
      this.selectedItem = this.el.querySelector('.galarey__image_selected');
    });
  }
}
