import { ContactCard } from './blocks/contact-card/contact-card';
import { ContactsList } from './blocks/contacts-list/contacts-list';
import { Pagination } from './blocks/pagination/pagination';

import { Card } from './views/card/card';
import { List } from './views/list/list';
import { Router } from '../libs/router';

window.ContactCard = ContactCard;
window.ContactsList = ContactsList;
window.Pagination = Pagination;

window.addEventListener('DOMContentLoaded', () => {
  const cardView = new Card();
  const listView = new List();
  const router = new Router();

  cardView.render(document.querySelector('.js-view-card'));
  listView.render(document.querySelector('.js-view-contacts'));
  router.register('contacts', listView, true);
  router.register('card', cardView);
  router.start();
});
