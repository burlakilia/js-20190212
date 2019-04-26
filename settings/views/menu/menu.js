import { SettingsMenu } from '../../blocks/settingsmenu/settingsmenu';
import { View } from '../view';
import template from './menu.pug';

/* eslint-disable */
import _ from './menu.scss';
/* eslint-enable */

export class Menu extends View {
  get bemName () {
    return 'menu';
  }

  template (data) {
    return template(data);
  }

  constructor () {
    super();
    this.settingsMenu = new SettingsMenu();
  }

  render (el, state) {
    super.render(el, state);
    this.settingsMenu.addItem({
      href: '#persondata',
      text: 'Личные данные'
    });
    this.settingsMenu.addItem({
      href: '#security',
      text: 'Безопасность'
    });
    this.settingsMenu.addItem({
      href: '../contacts',
      text: 'Контакты'
    });
    this.settingsMenu.render(this.getElement('place'));
    this.settingsMenu.setActive('#persondata');
  }
}
