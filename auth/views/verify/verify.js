import { View } from '../view';
import template from './verify.pug';

import { VerifyForm } from '../../blocks/verify/verify'

/* eslint-disable */
import _ from './verify.scss';
/* eslint-enable */

export class Verify extends View {
  get bemName () {
    return 'verify';
  }
  template (data) {
    return template(data);
  }
  constructor () {
    super();
    this.verify = new VerifyForm();
  }
  render (el) {
    super.render(el);
    this.verify.render(this.getElement('form'))
  }
}
