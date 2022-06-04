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
  y: 0,
  ease: 'ease-in'
})

/*import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);

let scrollBtnPaths = document.querySelectorAll('.scroll-btn svg path');

console.log(scrollBtnPaths);
let tl = gsap.timeline({onComplete:function() {
  setTimeout(() => {
    this.restart();
  }, 300);
}});

let scrollBtn = document.querySelector('.scroll-btn');

tl.from(scrollBtn, {
  duration: 0.3,
  y: 0,
  ease: 'linear'
})

tl.to(scrollBtn, {
  duration: 0.3,

  y: '5px',
  ease: 'linear'
})

scrollBtnPaths.forEach((el,i) => {
  tl.to(el, {
    duration: 0.1,

    opacity: 0,
    ease: 'linear'
  })

  tl.to(el, {
    duration: 0.1,
    delay: 0.1,
    opacity: 1,
    ease: 'linear'
  })
})*/
