import { View } from './views/view';
import { MessageCard } from './blocks/message-card/message-card';
import { Search } from './blocks/search/search';
import { MessageInfo } from './blocks/message-info/message-info';
import { MessageContent } from './blocks/message-content/message-content';

import { Sidebar } from './views/sidebar/sidebar';
import { Message } from './views/message/message';
import { Router } from '../libs/router';
/* eslint-disable */
import _ from './messages.scss';

/* eslint-enable */

window.MessageCard = MessageCard;
window.Search = Search;
window.MessageInfo = MessageInfo;
window.MessageContent = MessageContent;

window.Sidebar = Sidebar;
window.Message = Message;

window.addEventListener('DOMContentLoaded', () => {
  const listMessages = [
    {
      h5: 'Conference Team',
      text: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum',
      url: 'https://js.cx/carousel/1.png'
    },
    {
      h5: 'Slack',
      text: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum',
      url: ''
    },
    {
      h5: 'Ivan Petrov',
      text: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum',
      url: 'https://js.cx/clipart/winnie-mult.jpg'
    }];

  const innerMessage = {
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, aliquid! Lorem ipsum dolor sit',
    emailFrom: 'burlakili@bk.ru',
    emailTo: 'burlakili@bk.ru',
    time: '10 янв 2019',
    text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat itaque vitae assumenda vel magni illum, ut illo perferendis velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo dignissimos? Quia ea similique debitis impedit odio minima architecto sunt.</p>'
  };

  const sidebarView = new Sidebar({}, listMessages);
  const messageView = new Message(innerMessage);
  const router = new Router();

  sidebarView.render(document.querySelector('.js-inbox-sidebar'));
  messageView.render(document.querySelector('.js-inbox-message'));

  const search = document.querySelector('.search');
  const cards = document.querySelectorAll('.card');
  const containerCards = document.querySelector('.sidebar__cards');
  sidebarView.initFilter(search, cards, containerCards);

  router.register('messages', sidebarView, true);
  router.register('message', messageView, false);
  router.start();
});
