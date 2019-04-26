import { Block } from '../block';
import { Textbox } from '../textbox/textbox'
import template from './email-helper.pug';

/* eslint-disable */
import _ from './email-helper.scss';
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
      label: 'Введите email',
      value: '',
      required: false
    });
    this.onShowList = this.onShowList.bind(this);
    this.onHideList = this.onHideList.bind(this);
  }
  showList (event) {
    this.helper = document.createElement('div');
    this.helper.style.position = 'absolute';
    this.helper.classList.add(`${this.bemName}__list`);
    this.list = document.createElement('ul');
    let spanRect = event.target.getBoundingClientRect();
    let elRect = this.helper.getBoundingClientRect();
    this.helper.style.left = `${spanRect.left + 10}px`
    let top = spanRect.bottom;
    if (top + elRect.height > document.documentElement.clientHeight) {
      top = spanRect.top - elRect.height;
    }
    console.log('call onShowList');
    this.helper.style.top = `${top}px`;

    this.email1 = document.createElement('li');
    this.email1.innerHTML = 'alexey.khabarov';
    this.email2 = document.createElement('li');
    this.email2.innerHTML = 'example';
    this.list.appendChild(this.email1);
    this.list.appendChild(this.email2);
    this.helper.appendChild(this.list);
  }
  hideList () {
    this.helper.style.display = 'none';
    console.log('call onHideList');
  }
  render (el) {
    super.render(el);
    this.email.render(this.getElement('email'));
    console.log('render');
    document.querySelector('.email-helper__email').appendChild(this.helper);
    // this.el.querySelector('form').addEventListener('click', event => {
    //   event.preventDefault();
    //   console.log(this.email);
    // })
    // this.delegate('click', this.email, '[data-tooltip]', this.onShowList);
    // this.delegate('click', document.body, '[data-tooltip]', this.onHideList);
    console.log(this.email);
    // this.email.addEventListener('click', this.onShowList);
    // document.body.addEventListener('click', this.onHideList);
    document.body.querySelectorAll('.textbox__input').forEach((elem) => {
      elem.addEventListener('click', this.onShowList);
      // document.body.addEventListener('click', elem.onHideList);
    });
  }
}
