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
  // validateEmailCharacter (email) {
  //   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // }
  _getChar (event) {
    if (event.which == null) { // IE
      if (event.keyCode < 32) return null; // спец. символ
      return String.fromCharCode(event.keyCode)
    }
    if (event.which !== 0 && event.charCode !== 0) { // все кроме IE
      if (event.which < 32) return null; // спец. символ
      return String.fromCharCode(event.which); // остальные
    }
    return null; // спец. символ
  }
  _localPartSort (arr, str) {
    let newArray = [];
    for (let key in arr) {
      if (key.slice(0, str.length) === str) newArray.push(str);
    }
    return newArray;
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
    let localPart = '';
    this.el.querySelector('input').addEventListener('keypress', event => {
      let chr = this._getChar(event);
      // console.log(chr);
      localPart += chr;
      console.log(localPart);
      // console.log(this.el.querySelectorAll(`.${this.bemName}__list>ul>li`));
      for (const li of this.el.querySelectorAll(`.${this.bemName}__list>ul>li`)) {
        console.log(li.textContent);
      }
    });

    this.el.querySelector('input').addEventListener('keyup', event => {

    });
  }
}
