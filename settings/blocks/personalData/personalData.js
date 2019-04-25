import { Block } from '../block';
import { Textbox } from '../textbox/textbox';
import { Textareabox } from '../textareabox/textareabox';
import { Button } from '../button/button'
import template from './personalData.pug';
/* eslint-disable */
import _ from './personalData.scss';
/* eslint-enable */

export class PersonalData extends Block {
  get bemName () {
    return 'personal-data';
  }

  template (data) {
    return template(data);
  }

  constructor (options) {
    super(options);
    this.userSurname = new Textbox({
      name: 'user-surname',
      label: 'Фамилия',
      value: '',
      required: true,
      type: 'text'
    });
    this.userName = new Textbox({
      name: 'user-name',
      label: 'Имя',
      value: '',
      required: true,
      type: 'text'
    });
    this.userBirthday = new Textbox({
      name: 'user-birthday',
      label: 'Дата рождени',
      value: '',
      required: false,
      type: 'date'
    });
    this.signature = new Textareabox({
      name: 'signature',
      label: 'Подпись',
      value: '',
      required: false
    });
    this.submit = new Button({
      name: 'submit',
      value: 'Сохранить',
      type: 'submit'
    });
  }

  render (el) {
    super.render(el);
    this.userSurname.render(this.getElement('user-surname'));
    this.userName.render(this.getElement('user-name'));
    this.userBirthday.render(this.getElement('user-birthday'));
    this.signature.render(this.getElement('signature'));
    this.submit.render(this.getElement('submit'));
    this.el.addEventListener('submit', event => {
      event.preventDefault();
      console.log(this.userSurname.value, this.userName.value, this.userBirthday.value);
    });
  }
}
