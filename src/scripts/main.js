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
