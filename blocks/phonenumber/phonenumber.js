import { Block } from '../block';
import { PhoneField } from './phoneField/phoneField.js';
import template from './phonenumber.pug';
/* eslint-disable */
import _ from './phonenumber.scss';
/* eslint-enable */

export class Phonenumber extends Block {
  get bemName () {
    return 'phonenumber';
  }

  template (data) {
    return template(data);
  }

  constructor (options) {
    super(options);
    this.isError = true;
    if (options.name === undefined) {
      options.name = 'phonenumber'
    }

    this.phonenumber = new PhoneField(options);
  }

  render (el) {
    super.render(el);
    this.phonenumber.render(this.getElement('phonenumber'));
    let self = this

    this.el.querySelector('form').addEventListener('submit', event => {
      event.preventDefault();
    })

    this.el.querySelector('input').addEventListener('blur', event => {
      if (this.phonenumber.value === '') {
        return;
      }
      if (this.phonenumber.value.search('[+]{1}[7]{1} [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}$') === 0) {
        return;
      }

      this.el.querySelector('input').classList.add('errorPhone');
      let errorMessage = this.el.querySelector('span.form-message-inline.errorPhone');
      errorMessage.style.display = 'inline'

      console.log(self.options);

      if (self.options.required) {
        let requiredMessage = this.el.querySelector('span.form-message-inline.required');
        requiredMessage.style.display = 'none'
      }
      this.isError = true;

      event.preventDefault();
    })

    this.el.querySelector('input').addEventListener('focus', () => {
      this.el.querySelector('input').classList.remove('errorPhone');
      let errorMessage = this.el.querySelector('span.form-message-inline.errorPhone');
      errorMessage.style.display = 'none'
      if (self.options.required) {
        let requiredMessage = this.el.querySelector('span.form-message-inline.required');
        requiredMessage.style.display = 'inline'
      }
      this.isError = false;
    })

    this.el.querySelector('input').addEventListener('keydown', event => {
      if (event.ctrlKey || event.altKey || event.metaKey) return;

      let chr = event.key;

      if (chr == null) return;

      if ((chr < '0' || chr > '9') && (chr !== 'Backspace' && chr !== '+')) {
        event.preventDefault()
        return false;
      }
    })

    this.el.querySelector('input').addEventListener('keyup', event => {
      if (event.ctrlKey || event.altKey || event.metaKey) return;
      let number = this.phonenumber.value.replace(/\D/g, '').split('')
      let l = number.length;
      if (number[0] === '8') {
        number[0] = '7';
      }
      if (l >= 1) {
        number.unshift('+')
      }
      if (l >= 2) number.splice(2, 0, ' ');
      if (l >= 5) number.splice(6, 0, ' ');
      if (l >= 8) number.splice(10, 0, '-');
      if (l >= 10) number.splice(13, 0, '-');
      // if (l >= 11) number.splice(15, number.length - 15);
      this.phonenumber.value = number.join('');
    })

    this.el.querySelector('form').addEventListener('submit', event => {
      event.preventDefault();
      console.log(this.phonenumber.value);
      console.log(this.isError)
    })
  }
}
