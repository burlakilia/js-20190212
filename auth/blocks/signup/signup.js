import {
  Block
} from '../../../blocks/block';
import {
  InputField
} from '../inputField/inputField';
import template from './signup.pug';
/* eslint-disable */
import _ from './signup.scss';
/* eslint-enable */

export class SignupForm extends Block {
  get bemName () {
    return 'signup';
  }
  template (data) {
    return template(data);
  }
  constructor (options) {
    super(options);
    this.userMail = new InputField({
      name: 'user_mail',
      label: 'Your email address',
      value: '',
      type: 'email',
      required: true
    });

    this.userPassword = new InputField({
      name: 'user_password',
      label: 'Password',
      value: '',
      type: 'password',
      required: true
    });

    this.userPasswordRepeat = new InputField({
      name: 'user_password-repeat',
      label: 'Repeat password',
      value: '',
      type: 'password',
      required: true
    });
  }
  render (el) {
    super.render(el);
    this.userMail.render(this.getElement('user-mail'));
    this.userPassword.render(this.getElement('user-password'));
    this.userPasswordRepeat.render(this.getElement('user-password-repeat'));
    this.el.querySelector('form').addEventListener('submit', event => {
      event.preventDefault();
      console.log(this.userMail.value, this.userPassword.value);
    })
  }
}
