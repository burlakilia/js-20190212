import { Themes } from '../../blocks/themes/themes';
import { View } from '../view';
import template from './theme-form.pug';

export class ThemeForm extends View {
  get bemName () {
    return 'theme-form';
  }

  template (data) {
    return template(data);
  }

  constructor () {
    super();
    this.themes = new Themes();
  }

  render (el) {
    super.render(el);
    this.themes.render(this.getElement('form'));
  }
}
