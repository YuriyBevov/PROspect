import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Parallax from 'parallax-js'

setTimeout(() => {
  let scenes = document.querySelectorAll('g[data-id="parallax-container"]');

  console.log(scenes)

  if(scenes) {
    scenes.forEach(scene => {
      new Parallax(scene);
    })
  }
}, 2400);

const logo = document.querySelector('#logo');
if(logo) {
const houses = logo.querySelectorAll('g');
const windows = logo.querySelectorAll('path[data-id="house-window"]')

const title = logo.querySelector('g[data-id="name-container"]');

console.log(windows)

houses.forEach((el,i) => {
  if(el.getAttribute('data-id') === 'big-letter') {

  }

  if(el.getAttribute('data-id') === 'small-letter') {

  }

  if(el.getAttribute('data-id') === 'house-icon') {
    homeIconAnimation(el,i);
    console.log('ane')
  }
})

windows.forEach((el,i) => {
  fadeInAnimation(el,i)
})

function homeIconAnimation(el,index) {
  gsap.to(el, {
    duration: 1.5,
    delay: 0.1 * (index + 1),
    y: 0,
    opacity: 1,
    ease: 'ease-in'
  })
}

function fadeInAnimation(el,index) {
  gsap.to(el, {
    duration: 1.5,
    delay: 0.3 * (index + 1),
    opacity: 1,
    ease: 'ease-in'
  })
}

fadeInAnimation(title, 3)

let prospect = document.querySelector('#prospect');

/*gsap.to(prospect, {
  duration: 0.3,
  delay: 0.5,
  opacity: 1,
  ease: 'ease-in'
}) */
}
