import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('.portfolio');

if(section) {
  const title = section.querySelector('.portfolio__title');
  const titleTriggerOn = section.querySelector('.portfolio__item:nth-of-type(2)');
  const items = section.querySelectorAll('.portfolio__item');
  //const more = section.querySelector('.portfolio__more');
  //const moreTriggerOn = section.querySelector('.portfolio__item:nth-of-type(4)');

  gsap.to(title, {
    scrollTrigger: titleTriggerOn, // start the animation when ".box" enters the viewport (once)
    duration: 1,
    opacity: 1,
  });

  /* gsap.to(more, {
    scrollTrigger: moreTriggerOn, // start the animation when ".box" enters the viewport (once)
    duration: 2,
    delay: .3,
    opacity: 1,
    x: '100vh',
    rotate: '360deg'
  }); */

  items.forEach((item,i) => {
    let img = item.querySelector('img');
    let title = item.querySelector('.portfolio__description h3');

    let pars = document.querySelectorAll('.portfolio__description p');

    gsap.to(img, {
      scrollTrigger: item, // start the animation when ".box" enters the viewport (once)
      duration: 1,
      delay: 0.15 * (i+1),
      opacity: 1,
      scale: 1,
      y: 0,
    });

    gsap.to(title, {
      scrollTrigger: img, // start the animation when ".box" enters the viewport (once)
      duration: 1,
      opacity: 1,
      y: 0,
    });

    pars.forEach((par,i) => {
      gsap.to(par, {
        scrollTrigger: par, // start the animation when ".box" enters the viewport (once)
        duration: 1,
        delay: 0.2,
        opacity: 1,
        x: 0,
      });
    });
  });
}
