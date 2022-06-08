import {gsap} from 'gsap';

let scrollBtn = document.querySelector('.scroll-btn');

if(scrollBtn) {
  gsap.to(scrollBtn, {
    duration: 1.5,
    delay: 2,
    opacity: 1,
    ease: 'ease-in'
  });
}
