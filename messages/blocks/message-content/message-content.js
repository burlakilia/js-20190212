import { Block } from '../../../blocks/block';
import template from './message-content.pug';
/* eslint-disable */
import _ from './message-content.scss';

/* eslint-enable */

export class MessageContent extends Block {
  template (data) {
    return template(data);
  }
}
