import { Block } from '../block';
import template from './settingsmenu.pug';
/* eslint-disable */
import _ from './settingsmenu.scss';
/* eslint-enable */

export class SettingsMenu extends Block {
  get bemName () {
    return 'settings-menu';
  }

  template (data) {
    return template(data);
  }
  constructor (options = {}) {
    super(options);
  }
  addItem (itemOptions) {
    itemOptions.active = itemOptions.active || false;
    this.options.list = this.options.list || [];
    this.options.list.push(itemOptions);
  }
  setActive (href) {
    if (this.currentActiveItem) {
      this.currentActiveItem.classList.remove('settings-menu__item_active');
    };
    const activeItem = this.el.querySelector(`a[href="${href}"]`);
    this.currentActiveItem = activeItem;
    activeItem.classList.add('settings-menu__item_active');
  }
  render (el) {
    super.render(el);
    el.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        this.setActive(event.target.getAttribute('href'));
      }
    });
  }
}
