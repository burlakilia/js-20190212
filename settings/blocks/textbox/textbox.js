import { Block } from '../block';
import template from './textbox.pug';
/* eslint-disable */
import _ from './textbox.scss';
/* eslint-enable */

export class Textbox extends Block {
  get bemName () {
    return 'textbox';
  }
  template (data) {
    return template(data);
  }
  render (el) {
    super.render(el);
    if (this.options.required) {
      this.getElement('input').classList.toggle('textbox__input_required', true);
    }
  }
  get value () {
    this.input = this.getElement('input').firstElementChild;
    if (this.options.required && this.input.value === '') {
      this.input.classList.toggle('textbox__input_error', true);
      return false;
    }
    this.input.classList.toggle('textbox__input_error', false);
    return this.input.value;
  }
}
