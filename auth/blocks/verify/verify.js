import { Block } from '../../../blocks/block';
import { InputField } from '../inputField/inputField';
import template from './verify.pug';
/* eslint-disable */
import _ from './verify.scss';
/* eslint-enable */

export class VerifyForm extends Block {
  get bemName () {
    return 'verify';
  }
  template (data) {
    return template(data);
  }
  constructor (options) {
    super(options);
    this.userPassword = new InputField({
      label: 'sms code',
      name: 'user_sms',
      value: '',
      type: 'password',
      required: true
    });
  }
  render (el) {
    super.render(el);
    this.userPassword.render(this.getElement('user-sms'));
    this.el.querySelector('form').addEventListener('submit', event => {
      event.preventDefault();
      console.log(this.userPassword.value);
    })
  }
}
