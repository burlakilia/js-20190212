import {
  Block
} from '../../../blocks/block';
import {
  InputField
} from '../inputField/inputField';
import template from './signin.pug';
/* eslint-disable */
import _ from './signin.scss';
/* eslint-enable */

export class SigninForm extends Block {
  get bemName () {
    return 'signin';
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
  }
  onSubmit (form) {}
  render (el) {
    super.render(el);
    this.userMail.render(this.getElement('user-mail'));
    this.userPassword.render(this.getElement('user-password'));
    this.el.querySelector('form').addEventListener('submit', event => {
      event.preventDefault();
      this.onSubmit({
        email: this.userMail.el.querySelector('input').value,
        pwd: this.userPassword.el.querySelector('input').value
      });
    })
  }
}
