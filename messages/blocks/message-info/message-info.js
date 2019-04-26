import { Block } from '../../../blocks/block';
import template from './message-info.pug';
/* eslint-disable */
import _ from './message-info.scss';

/* eslint-enable */

export class MessageInfo extends Block {
  get bemName () {
    return 'letter';
  }
  get content () {
    return this.el.querySelector(`.${this.bemName}__content`);
  }
  template (data) {
    return template(data);
  }
}
