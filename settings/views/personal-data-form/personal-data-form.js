import { PersonalData } from '../../blocks/personalData/personalData';
import { View } from '../view';
import template from './personal-data-form.pug';

export class PersonalDataForm extends View {
  get bemName () {
    return 'personal-data-form';
  }

  template (data) {
    return template(data);
  }

  constructor () {
    super();
    this.personalData = new PersonalData();
  }

  render (el) {
    super.render(el);
    this.personalData.render(this.getElement('form'));
  }
}
