import { Block } from '../block'
// import { Textbox } from '../textbox/textbox';
import template from './gallerey.pug'
/* eslint-disable */
import _ from "./gallerey.scss"
/* eslint-enable */

export class Gallerey extends Block {
  get bemName () {
    return 'gallerey';
  }
  template (data) {
    return template(data);
  }

  constructor (options) {
    super(options);
    this.inLine = options.inLine;
    this.itemAmount = options.itemAmount;
    this.size = options.size;
    this.width = options.width;
    this.height = options.height;
  }
  render (el) {
    super.render(el);
    let coord = 0;
    const inLine = this.inLine;
    const size = this.size;
    const itemAmount = this.itemAmount;
    const itemWidth = this.width;
    const itemHeight = this.height;
    const widthGallerey = document.getElementById('inLine__wrap');
    const inRowGallerey = document.getElementById('inRow__wrap');
    let heightCoord = itemHeight;
    if (inLine) {
      widthGallerey.style.width = itemWidth * itemAmount + 'px';
      if (itemAmount >= size) {
        const btnLeft = document.getElementById('btn__left');
        const btnRight = document.getElementById('btn__right');
        btnLeft.style.display = 'none';
        btnRight.style.display = 'none';
      }
      document.getElementById('btn__right').onclick = function () {
        coord = coord - itemWidth;
        if (coord <= -((size * itemWidth) - (itemWidth * itemAmount))) {
          coord = -((size * itemWidth) - (itemWidth * itemAmount));
        }
        widthGallerey.style.left = coord + 'px';
      };
      document.getElementById('btn__left').onclick = function () {
        coord = coord + itemWidth;
        if (coord > 0) { coord = 0 }
        widthGallerey.style.left = coord + 'px'
      };
    } else {
      inRowGallerey.style.height = itemHeight + 'px';
      inRowGallerey.style.width = itemWidth * itemAmount + 'px';
      const rowStyle = document.getElementById('inRow');
      if (itemAmount >= size) {
        const btnMore = document.getElementById('btn__more');
        const btnHidden = document.getElementById('btn__hidden');
        btnMore.style.display = 'none';
        btnHidden.style.display = 'none';
      }
      document.getElementById('btn__more').onclick = function () {
        if (heightCoord >= ((size / itemAmount) * itemWidth)) {
          return;
        }
        heightCoord = heightCoord + itemWidth;
        rowStyle.style.height = heightCoord + 'px';
      };
      document.getElementById('btn__hidden').onclick = function () {
        heightCoord = itemWidth;
        rowStyle.style.height = heightCoord + 'px';
      };
    }
  }
}
