
import {gsap} from 'gsap';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
//import {ScrollSmoother} from 'gsap/ScrollSmoother';

import {TextPlugin} from 'gsap/TextPlugin';
gsap.registerPlugin(ScrollTrigger, /*ScrollSmoother,*/ TextPlugin);

/*let featuresTitle = document.querySelector('.features__title span');

featuresTitle.style.opacity = 0;

gsap.to(featuresTitle, {
  scrollTrigger: {
    trigger: featuresTitle,
    start: "top bottom", // when the top of the trigger hits the bottom of the viewport
    //markers: true,
  },

  duration: 2,
  delay: 0.3,
  opacity: 1,
  text: {value: "Наши услуги", speed: 1},
  ease: "ease-in"
});*/

/*const text = document.querySelector('.outdoor h2 > span');
console.log(text);

gsap.to(text, {
  scrollTrigger: {
    trigger: text,
    start: "top bottom", // when the top of the trigger hits the bottom of the viewport
    //markers: true,
  },

  duration: 2,
  delay: 0.3,
  opacity: 1,
  text: {value: "Наружная реклама", speed: 1},
  ease: "ease-in"
});*/


