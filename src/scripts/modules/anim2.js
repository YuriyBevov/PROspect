import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const logo = document.querySelector('#logo');
const paths = logo.querySelectorAll('path');

paths.forEach((el,i) => {
  if(el.getAttribute('data-id') === 'big-letter') {
    bigLetterAnimation(el, i);
  }

  if(el.getAttribute('data-id') === 'small-letter') {
    smallLetterAnimation(el, i);
  }

  if(el.getAttribute('data-id') === 'home-icon') {
    homeIconAnimation(el, i)
  }
})

function bigLetterAnimation(el, index) {
  gsap.to(el, {
    duration: 0.5,
    delay: 0.15 * (index + 1),
    y: '-10',
    opacity: 1,
    ease: 'ease-in'
  })

  setTimeout(() => {
    el.classList.add('shadow-on')
  }, 2000);
}

function smallLetterAnimation(el, index) {
  gsap.to(el, {
    duration: 1,
    delay: 0.2 * (index + 1),
    x: '-5',
    opacity: 1,
    ease: 'ease-in'
  })

  setTimeout(() => {
    el.classList.add('shadow-on')
  }, 2000);
}

function homeIconAnimation(el,index) {
  gsap.to(el, {
    duration: 1.5,
    delay: 0.5 * (index + 1),
    y: 0,
    opacity: 1,
    ease: 'ease-in'
  })
}

const text = document.querySelector('.intro__text');

gsap.to(text, {
  duration: 1.2,
  delay: 2.2,
  opacity: 1,
  ease: 'linear'
})

const scroller = document.querySelector('.intro__scroll');
gsap.to(scroller, {
  duration: 1.2,
  delay: 3.2,
  opacity: 1,
  y: 0,
  ease: 'linear'
})
