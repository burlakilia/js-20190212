import { Block } from '../../blocks/block';

export class View extends Block {
  render (el) {
    super.render(el);
    this.el.hidden = true;
  }
  toggle (state) {
    this.el.hidden = !state;
  }
}
