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
    this.showList = this.showList.bind(this);
    this.hideList = this.hideList.bind(this);
  }
  showList (event) {
    console.log('call showList');
    let helper = document.createElement('div');
    helper.classList.add(`${this.bemName}__list`);
    // console.log(helper);
    let listRect = event.target.getBoundingClientRect();
    // let elRect = this.helper.getBoundingClientRect();
    helper.style.left = `${listRect.left + 10}px`
    helper.style.top = `${listRect.bottom + 10}px`;
    // console.log(list);
    let list = document.createElement('ul');
    let email1 = document.createElement('li');
    let email2 = document.createElement('li');
    email1.innerHTML = 'alexey.khabarov@mail.ru';
    email2.innerHTML = 'example@example.ru';
    list.appendChild(email1);
    list.appendChild(email2);
    helper.appendChild(list);
    // console.log(email.querySelector(`.${this.bemName}`));
    this.email.querySelector(`.${this.bemName}__email`).appendChild(this.helper);
    // helper.style.display = helper.style.display ? '' : 'none';
  }
  hideList () {
    // helper.style.display = 'none';
    console.log('call hideList');
  }
  render (el) {
    super.render(el);
    this.email.render(this.getElement('email'));
    // document.querySelector('.email-helper__email').appendChild(this.helper);
    console.log('call render');
    this.el.querySelector('input').addEventListener('click', this.showList);
  }
}
