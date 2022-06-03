import './modules/scrollBtns.js';
import './modules/previewAnimation.js';

const burger = document.querySelector('.js-menu-opener');

const nav = document.querySelector('.nav__list');

const onClickOpenNav = (evt) => {
  evt.preventDefault();

  if(!burger.classList.contains('opened')) {
    burger.classList.add('opened');
    nav.classList.add('opened');
  } else {
    //nav.classList.add('closing');
    burger.classList.remove('opened');
    nav.classList.remove('opened');
  }
}

burger.addEventListener('click', onClickOpenNav);
