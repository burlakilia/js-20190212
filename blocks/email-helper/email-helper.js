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
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].slice(0, str.length) === str) newArray.push(arr[i]);
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
    let lineLenght = 0;
    this.el.querySelector('input').addEventListener('input', event => {
      let result = event.target.value;
      console.log(result.length, lineLenght);
      if (result.length < lineLenght) {
        console.log('backspace');
        for (const li of this.el.querySelectorAll(`.${this.bemName}__list>ul>li`)) {
          if ((li.textContent.slice(0, result.length) === result) && (li.style.display === 'none')) {
            li.style.display = '';
          }
        }
      }
      lineLenght = result.lenght;
      for (const li of this.el.querySelectorAll(`.${this.bemName}__list>ul>li`)) {
        if (li.textContent.slice(0, result.length) !== result) {
          li.style.display = 'none';
        }
      }
    });

    for (const li of this.el.querySelectorAll(`.${this.bemName}__list>ul>li`)) {
      li.addEventListener('mouseover', event => {
        console.log(event.target);
        event.target.style.background = 'lightgray';
      });
      li.addEventListener('mouseout', event => {
        console.log(event.target);
        event.target.style.background = '';
      });
      li.addEventListener('click', event => {
        this.el.querySelector('input').value = event.target.textContent;
        this.el.querySelector(`.${this.bemName}__list`).classList.remove(`.${this.bemName}__list_active`);
      });
    }

    // this.el.querySelector(`.${this.bemName}__list ul`).addEventListener('mouseover', event => {
    //   if (event.target && event.target.matches('li')) {
    //     event.target.style.background = 'lightgray';
    //     console.log(event.target);
    //   }
    // });
    // this.el.querySelector(`.${this.bemName}__list ul`).addEventListener('mouseout', event => {
    //   if (event.target && event.target.matches('li')) {
    //     event.target.style.background = '';
    //     console.log(event.target);
    //   }
    // });
  }
}
