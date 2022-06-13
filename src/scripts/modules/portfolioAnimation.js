import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('.portfolio');

if(section) {
  const title = section.querySelector('.portfolio__title');
  const titleTriggerOn = section.querySelector('.portfolio__item:nth-of-type(2)');
  //const items = section.querySelectorAll('.portfolio__item-overlay');
  const items = section.querySelectorAll('.portfolio__item');

  gsap.to(title, {
    scrollTrigger: titleTriggerOn,
    duration: 1,
    opacity: 1,
  });

  function scrollTriggerOpt(el) {
    return {
      trigger: el,
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "+=1000",
      //markers: true,
    }
  }

  items.forEach((item,i) => {

    gsap.to(item, {
      scrollTrigger: scrollTriggerOpt(item),
      duration: 0.8,
      delay: 0.15 * (i+1),
      y: '0',
      opacity: 1,
      ease: 'linear'
    });

    /*if(i !== 1 && i !== 2 && i !== 5 ) {
      //влево
      gsap.to(item, {
        scrollTrigger: scrollTriggerOpt(item),
        duration: 0.8,
        delay: 0.2,
        x: '102%',
        ease: 'linear'
      });
    } else {
      //прозрачность
      gsap.to(item, {
        scrollTrigger: scrollTriggerOpt(item),
        duration: 1.2,
        delay: 0.5,
        opacity: 0,
        ease: 'linear'
      });

      gsap.to(item, {
        scrollTrigger: scrollTriggerOpt(item),
        delay: 1.5,
        display: 'none'
      });
    }*/
  });

  const portfolioLink = document.querySelector('.portfolio__link');
  const overlay = portfolioLink.querySelector('.portfolio-link-overlay');
  const arrowGroup = portfolioLink.querySelector('.arrow-group');
  const text = portfolioLink.querySelector('.text');
  const question = portfolioLink.querySelector('.question-mark');

  gsap.to(overlay, {
    scrollTrigger: scrollTriggerOpt(portfolioLink),
    duration: 0.8,
    delay: 0.3,
    ease: 'linear',
    width: '100%',
  });

  gsap.to(arrowGroup, {
    scrollTrigger: scrollTriggerOpt(portfolioLink),
    delay: 0.9,
    opacity: 1
  });

  gsap.to(text, {
    scrollTrigger: scrollTriggerOpt(portfolioLink),
    delay: 0.9,
    opacity: 1
  });

  gsap.to(question, {
    scrollTrigger: scrollTriggerOpt(portfolioLink),
    delay: 0.9,
    opacity: 1
  });

  gsap.to(overlay, {
    scrollTrigger: scrollTriggerOpt(portfolioLink),
    duration: 0.6,
    delay: 1,
    ease: 'linear',
    x: '120%',
  });
};
