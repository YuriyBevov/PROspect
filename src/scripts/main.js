import './modules/scrollBtns.js';
import './modules/previewAnimation.js';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const burger = document.querySelector('.js-menu-opener');
const nav = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item');

const onClickOpenNav = (evt) => {
  evt.preventDefault();

  if(!burger.classList.contains('opened')) {
    burger.classList.add('opened');
    nav.classList.add('opened');

    navItems.forEach((item, i) => {
      gsap.to(item, {
        duration: 0.7,
        delay: 0.15 * ( i + 1 ),
        opacity: 1,
        y: 0,
        ease: 'ease-in'
      })
    })
  } else {
    burger.classList.add('closing');
    nav.classList.add('closing');
    navItems.forEach((item, i) => {
      gsap.to(item, {
        duration: 0.7,
        delay: 0.15 * ( i + 1 ),
        opacity: 0,
        y: '-150px',
        ease: 'ease-in'
      })
    })


    setTimeout(() => {
      burger.classList.remove('closing');
      nav.classList.remove('closing');
      burger.classList.remove('opened');
      nav.classList.remove('opened');
    }, 1700);

  }
}

burger.addEventListener('click', onClickOpenNav);
