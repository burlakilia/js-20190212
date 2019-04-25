import {
  Block
} from '../../../blocks/block';
import template from './inputField.pug';
/* eslint-disable */
import _ from './inputField.scss';
/* eslint-enable */

export class InputField extends Block {
  get bemName () {
    return 'inputField';
  }
  template (data) {
    return template(data);
  }
  get value () {
    return this.getElement('input').value;
  }
}
