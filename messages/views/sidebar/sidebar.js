import { View } from '../view';
import template from './sidebar.pug';
import { Search } from '../../blocks/search/search';
import { MessageCard } from '../../blocks/message-card/message-card'
/* eslint-disable */
import _ from './sidebar.scss';

/* eslint-enable */

export class Sidebar extends View {
  get bemName () {
    return 'sidebar'
  }
  template (data) {
    return template(data)
  }
  constructor (options, list) {
    super(options);
    this.search = new Search(options);
    if (list) {
      list.forEach(item => {
        this.card = new MessageCard(item);
      });
    } else {
      this.card = new MessageCard({
        h5: options.h5 || 'No title',
        text: options.text || 'no text',
        url: options.url || ''
      });
    }
  }
  render (el) {
    if (!el) return;

    super.render(el);
    this.search.render(this.getElement('search'));
    this.card.render(this.getElement('cards'));
  }
  /**
   * Метод инициализации сортировки
   *
   * @param input [HTMLDivElement] – поле ввода фильтрации
   * @param list [NodeList] – элементы, которые должны сортироваться
   * @param container [HTMLDivElement] – элемент, куда должен выводиться результат
   *
   * */
  initFilter (input, list, container) {

    const search = this.search;
    input.addEventListener('input', this.debounce(function (event) {
      if (!event.target.matches('input')) return;

      container.innerHTML = '';
      const foundEls = search.find('.js-find-matches', event.target.value, list);
      foundEls.forEach(el => {
        container.appendChild(el);
      })
    }));
  }
}
