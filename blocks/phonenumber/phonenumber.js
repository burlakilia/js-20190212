import { Block } from '../block';
import { PhoneField } from './phoneField/phoneField.js';
import template from './phonenumber.pug';
import { Model } from './model/model'
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
    this.model = new Model()
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

      let number = this.phonenumber.value;

      this.model.validation(number).then(data => {
        console.log(data)
        if (data.success === false) {
          number = number.replace(/[^+0-9]/gim, '');
          console.log('check regexp', number.search('[+]{1}[7]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}$'))
          if (number.search('[+]{1}[7]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}$') === 0) {
            console.log('number true in reqexp')
            return;
          }
        }

        if (data.valid) {
          console.log('number true in API')
          console.log(data)
          return;
        }

        console.log('Error number')

        this.el.querySelector('input').classList.add('errorPhone');
        let errorMessage = this.el.querySelector('span.form-message-inline.errorPhone');
        errorMessage.style.display = 'inline'

        if (self.options.required) {
          let requiredMessage = this.el.querySelector('span.form-message-inline.required');
          requiredMessage.style.display = 'none'
        }

        this.isError = true;

        event.preventDefault();
      })
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
    this.el.querySelector('.phoneCountrySelect').addEventListener('change', event => {
      this.phonenumber.value = event.target.value;
    })

    /*

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
    */

    this.el.querySelector('form').addEventListener('submit', event => {
      event.preventDefault();
      console.log(this.phonenumber.value);
      console.log(this.isError)
    })
  }
}

/* function request (number) {
  return fetch(`http://apilayer.net/api/validate?access_key=a6e6ab8e6f404fe484554f900c232b72d&number=${number}&country_code=&format=1`).then(response => {
    return response.json()
  });
}
*/
