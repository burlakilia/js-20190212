import template from './message-card.pug';
import { Block } from '../../../blocks/block';
/* eslint-disable */
import _ from './message-card.scss';

/* eslint-enable */

export class MessageCard extends Block {
  get bemName () {
    return 'card';
  }
  template (data) {
    return template(data);
  }
}
