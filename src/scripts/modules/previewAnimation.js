import Parallax from 'parallax-js'

import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const overlay = document.querySelector('.overlay');

document.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {
    function homeIconAnimation(el,index) {
      gsap.to(el, {
        duration: 1.5,
        delay: 0.1 * (index + 1),
        y: 0,
        opacity: 1,
        ease: 'ease-in'
      });
    };

    function fadeInAnimation(el,index) {
      gsap.to(el, {
        duration: 1.5,
        delay: 0.3 * (index + 1),
        opacity: 1,
        ease: 'ease-in'
      });
    };

    gsap.to(overlay, {
      duration: .5,
      delay: 0,
      opacity: 0,
      ease: 'ease-out',
      zIndex: '-1'
    });

    const logo = document.querySelector('#logo');

    if(logo) {
      const houses = logo.querySelectorAll('g[data-id="house"');
      const windows = logo.querySelectorAll('path[data-id="house-window"]');
      const title = logo.querySelector('g[data-id="name-container"]');

      houses.forEach((el,i) => {
        homeIconAnimation(el,i);
      });

      windows.forEach((el,i) => {
        fadeInAnimation(el,i);
      });

      fadeInAnimation(title, 3);
    }

    /*setTimeout(() => {
      let scenes = document.querySelectorAll('g[data-id="parallax-container"]');

      if(scenes) {
        scenes.forEach(scene => {
          new Parallax(scene);
        })
      }
    }, 2400);*/
  }, 500);
});
