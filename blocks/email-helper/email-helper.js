import { Block } from '../block';
import { Textbox } from '../textbox/textbox'
import template from './email-helper.pug';

/* eslint-disable */
import _ from './email-helper.scss';
import { conditionalExpression } from 'babel-types';
/* eslint-enable */

export class EmailHelper extends Block {
  get bemName () {
    return 'email-helper';
  }
  template (data) {
    return template(data);
  }
  constructor (options) {
    super(options);
    this.email = new Textbox({
      name: 'email',
      label: 'Email',
      value: '',
      required: false
    });
  }
  render (el) {
    super.render(el);
    this.email.render(this.getElement('email'));
    this.el.querySelector('form').addEventListener('click', event => {
      let className = `${this.bemName}__list`;
      let node = this.el.querySelector(`.${className}`);
      if (event.target === this.el.querySelector('input')) {
        node.classList.toggle(`${className}_active`);
      } else {
        node.classList.remove(`${className}_active`);
      }
    });
  }
}
