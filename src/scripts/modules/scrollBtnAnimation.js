import {gsap} from 'gsap';

let scrollBtn = document.querySelector('.scroll-btn');

if(scrollBtn) {
  gsap.from(scrollBtn, {
    duration: 1.5,
    delay: 2,
    opacity: 0,
    ease: 'power2'
  });
}
