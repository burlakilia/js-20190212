import { Security } from '../../blocks/security/security';
import { View } from '../view';
import template from './security-form.pug';

export class SecurityForm extends View {
  get bemName () {
    return 'security-form';
  }

  template (data) {
    return template(data);
  }

  constructor () {
    super();
    this.security = new Security();
  }

  render (el) {
    super.render(el);
    this.security.render(this.getElement('form'));
  }
}
