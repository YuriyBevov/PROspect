import './modules/scrollBtns.js';
import './modules/previewAnimation.js';
import './modules/navbar.js';

import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);

let scrollBtn = document.querySelector('.scroll-btn');

gsap.to(scrollBtn, {
  duration: 1.5,
  delay: 2,
  opacity: 1,
  ease: 'ease-in'
})

// show header-logo
/*const headerLogo = document.querySelector('.main-header__small-logo');

if(window.scrollY > 600) {

  if(window.innerWidth > 959) {
    console.log('laptop')
  }

  gsap.to(headerLogo, {
    duration: 0.7,
    delay: 0.2,
    opacity: 1,
    zIndex: '99',
    ease: 'ease-in'
  })
} else {

  if(window.innerWidth < 959) {
    console.log('!!laptop')
  }

  gsap.to(headerLogo, {
    duration: 0.7,
    delay: 0.2,
    opacity: 0,
    zIndex: '-1',
    ease: 'ease-in'
  })
}

window.addEventListener('scroll', () => {
  if(window.scrollY > 600) {

    if(window.innerWidth > 959) {
      console.log('laptop')
    }

    gsap.to(headerLogo, {
      duration: 0.7,
      delay: 0.2,
      opacity: 1,
      zIndex: '99',
      ease: 'ease-in'
    })
  } else {

    if(window.innerWidth < 959) {
      console.log('!!laptop')
    }

    gsap.to(headerLogo, {
      duration: 0.7,
      delay: 0.2,
      opacity: 0,
      zIndex: '-1',
      ease: 'ease-in'
    })
  }
});*/
