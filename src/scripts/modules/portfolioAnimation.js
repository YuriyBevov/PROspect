import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('.portfolio');

if(section) {
  const title = section.querySelector('.portfolio__title');
  const titleTriggerOn = section.querySelector('.portfolio__item:nth-of-type(2)');
  const items = section.querySelectorAll('.portfolio__item');


  gsap.to(title, {
    scrollTrigger: titleTriggerOn, // start the animation when ".box" enters the viewport (once)
    duration: 1,
    opacity: 1,
  });

  items.forEach((item,i) => {
    gsap.to(item, {
      scrollTrigger: item,
      duration: 0.8,
      delay: 0.3,
      scale: 1,
      y: 0,
      opacity: 1
    });
  });

  const portfolioLinkTrigger = document.querySelector('.outdoor');
  const portfolioLink = document.querySelector('.portfolio__link');
  const overlay = portfolioLink.querySelector('.portfolio-link-overlay');
  const arrowGroup = portfolioLink.querySelector('.arrow-group');
  const text = portfolioLink.querySelector('.text');
  const question = portfolioLink.querySelector('.question-mark');

  gsap.to(overlay, {
    scrollTrigger: portfolioLinkTrigger,
    duration: 0.8,
    ease: 'ease-in',
    width: '100%',
  });

  gsap.to(arrowGroup, {
    scrollTrigger: portfolioLinkTrigger,
    delay: 0.9,
    opacity: 1
  });

  gsap.to(text, {
    scrollTrigger: portfolioLinkTrigger,
    delay: 0.9,
    opacity: 1
  });

  gsap.to(question, {
    scrollTrigger: portfolioLinkTrigger,
    delay: 0.9,
    opacity: 1
  });

  gsap.to(overlay, {
    scrollTrigger: portfolioLinkTrigger,
    duration: 0.6,
    delay: 1,
    ease: 'ease-out',
    x: '120%',
  });
};
