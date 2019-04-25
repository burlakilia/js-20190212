import { Block } from '../block';
import { SettingsMenu } from '../settingsmenu/settingsmenu';

import template from './settingsform.pug';
/* eslint-disable */
import _ from './settingsform.scss';
/* eslint-enable */

export class SettingsForm extends Block {
  get bemName () {
    return 'settings-form';
  }

  template (data) {
    return template(data);
  }
  constructor (options) {
    super(options);
    if (!options.menu.list) {
      options.menu.list = [
        { href: '#persondata', text: 'Личные данные' },
        { href: '#security', text: 'Безопасность' },
        { href: '#theme', text: 'Тема' }
      ]
    };
    this.settingsMenu = new SettingsMenu(options.menu);
    this.form = new options.FormConstructor(options.formOptions);
  }
  render (el) {
    super.render(el);
    this.settingsMenu.render(this.getElement('settings-menu'));
    this.form.render(this.getElement('form'));
    if (this.options.menu.activeItem) {
      this.settingsMenu.setActive(this.options.menu.activeItem);
    };
  }
}
