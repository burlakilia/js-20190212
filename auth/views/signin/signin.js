import { View } from '../view';
import template from './signin.pug';

import { SigninForm } from '../../blocks/signin/signin'

/* eslint-disable */
import _ from './signin.scss';
/* eslint-enable */

export class Signin extends View {
  get bemName () {
    return 'signin';
  }
  template (data) {
    return template(data);
  }
  constructor () {
    super();
    this.signinForm = new SigninForm();
  }
  render (el) {
    super.render(el);
    this.signinForm.render(this.getElement('form'))
  }
}
