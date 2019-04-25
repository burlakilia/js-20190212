import { Block } from '../block';
import { Textbox } from '../textbox/textbox';
import template from './datebox.pug';
/* eslint-disable */
import _ from './datebox.scss';
/* eslint-enable */

console.log('test');

let dateToday = new Date();

export class Datebox extends Block {
  get bemName () {
    return 'birthday-date';
  }
  template (data) {
    return template(data);
  }
  constructor (options) {
    super(options);
    this.datebox = new Textbox({
      name: 'birthdate',
      label: 'Дата рождения',
      value: '',
      required: true,
      type: 'date',
      min: "1900-01-01",
      max: `${dateToday.getYear}-${dateToday.getMonth}-${dateToday.getDate}`
    });
  }
  render (el) {
    super.render(el);
    this.datebox.render(this.getElement('birthdate'));
  }
}
