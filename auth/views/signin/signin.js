import { View } from '../view';
import { User } from '../../model/user';
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
    this.model = new User();
    this.signinForm = new SigninForm();
  }
  signin (form) {
    this.model
      .signin(form)
      .then(result => console.log(result));
  }
  render (el) {
    super.render(el);
    this.signinForm.render(this.getElement('form'));
    this.signinForm.onSubmit = form => this.signin(form);
  }
}
