import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Parallax from 'parallax-js'

setTimeout(() => {
  let scenes = document.querySelectorAll('g[data-id="parallax-container"]');

  if(scenes) {
    scenes.forEach(scene => {
      new Parallax(scene);
    })
  }
}, 2400);

const logo = document.querySelector('#logo');
if(logo) {
const houses = logo.querySelectorAll('g[data-id="house"');
const windows = logo.querySelectorAll('path[data-id="house-window"]')
const title = logo.querySelector('g[data-id="name-container"]');

houses.forEach((el,i) => {
  homeIconAnimation(el,i);
})

windows.forEach((el,i) => {
  fadeInAnimation(el,i)
})

function homeIconAnimation(el,index, isBigHouse) {
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
