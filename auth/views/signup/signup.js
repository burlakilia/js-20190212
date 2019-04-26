import { View } from '../view';
import template from './signup.pug';
import { User } from '../../model/user';

import { SignupForm } from '../../blocks/signup/signup'

/* eslint-disable */
import _ from './signup.scss';
/* eslint-enable */

export class Signup extends View {
  get bemName () {
    return 'signup';
  }
  template (data) {
    return template(data);
  }
  constructor () {
    super();
    this.model = new User();
    this.signupForm = new SignupForm();
  }
  render (el) {
    super.render(el);
    this.signupForm.render(this.getElement('form'));
  }
  onSubmit (form) {
    this.model
      .signup(form)
  }
}
