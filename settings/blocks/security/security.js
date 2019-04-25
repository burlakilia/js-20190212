import { Block } from '../block';
import { Textbox } from '../textbox/textbox';
import { Button } from '../button/button'
import template from './security.pug';
/* eslint-disable */
import _ from './security.scss';
/* eslint-enable */

export class Security extends Block {
  get bemName () {
    return 'security';
  }

  template (data) {
    return template(data);
  }

  constructor (options) {
    super(options);
    this.oldPassword = new Textbox({
      name: 'old-password',
      label: 'Старый пароль',
      value: '',
      required: true,
      type: 'password'
    });
    this.newPassword = new Textbox({
      name: 'new-password',
      label: 'Новый пароль',
      value: '',
      required: true,
      type: 'password'
    });
    this.newPasswordRepeat = new Textbox({
      name: 'new-password-repeat',
      label: 'Повторите пароль',
      value: '',
      required: true,
      type: 'password'
    })
    this.submit = new Button({
      name: 'submit',
      value: 'Сохранить',
      type: 'submit'
    })
  }

  render (el) {
    super.render(el);
    this.oldPassword.render(this.getElement('old-password'));
    this.newPassword.render(this.getElement('new-password'));
    this.newPasswordRepeat.render(this.getElement('new-password-repeat'));
    this.submit.render(this.getElement('submit'));
    this.el.addEventListener('submit', event => {
      event.preventDefault();
      console.log(this.oldPassword.value, this.newPassword.value, this.newPasswordRepeat.value);
    });
  }
}
