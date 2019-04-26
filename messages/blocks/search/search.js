import template from './search.pug';
import { Block } from '../../../blocks/block';
/* eslint-disable */
import _ from './search.scss';

/* eslint-enable */

export class Search extends Block {
  get bemName () {
    return 'search';
  }
  template (data) {
    return template(data);
  }
  /**
   * Хелпер нахождения совпадений (вынесла, может ещё будет где-то использоваться)
   *
   * @param classSortEl [String] – имя класса элемента, где ищется совпадение
   * @param wordMatches [String] – значение, по которому ищется совпадение
   * @param elements [Array] – сортируемый массив с элементами, в которых ищется совпадение
   * @return Array
   *
   * */
  _findMatches (classSortEl, wordMatches, elements) {
    return elements.filter(element => {
      const regex = new RegExp(wordMatches, 'gi');
      return element.textContent.match(regex) ? element.textContent.match(regex) : element.querySelector(classSortEl).textContent.match(regex);
    });
  }
  /**
   * Метод сортировки массива элементов
   *
   * @param classSortEl [String] – имя класса элемента, по которому должен происходить поиск
   * @param value [String] – значение, по которому происходит поиск и сортировка массива
   * @param els [NodeList] – элементы, которые должны сортироваться
   * @return Array
   *
   * */
  find (classSortEl, value, els) {
    let arrEls = [];
    els.forEach(el => {
      arrEls.push(el);
    });

    return this._findMatches(classSortEl, value, arrEls);
  }
}
