import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('.portfolio');

if(section) {
  const title = section.querySelector('.portfolio__title');
  const titleTriggerOn = section.querySelector('.portfolio__item:nth-of-type(2)');
  const items = section.querySelectorAll('.portfolio__item');

  gsap.from(title, {
    scrollTrigger: titleTriggerOn,
    duration: 1,
    opacity: 0,
  });

  function scrollTriggerOpt(el) {
    return {
      trigger: el,
      start: "top bottom",
      end: "+=1000",
      //markers: true,
    }
  }

  items.forEach((item,i) => {
    gsap.from(item, {
      scrollTrigger: scrollTriggerOpt(item),
      duration: 0.8,
      delay: 0.15 * (i+1),
      y: '150px',
      opacity: 0,
      ease: 'linear'
    });
  });

  const portfolioLink = document.querySelector('.portfolio__link');
  const overlay = portfolioLink.querySelector('.portfolio-link-overlay');
  const arrowGroup = portfolioLink.querySelector('.arrow-group');
  const text = portfolioLink.querySelector('.text');
  const question = portfolioLink.querySelector('.question-mark');

  let opacityItems = [arrowGroup,text,question];
  opacityItems.forEach(item => item.style.opacity = 0);

  let tl = gsap.timeline({
    scrollTrigger: scrollTriggerOpt(portfolioLink),
  });

  tl.to(overlay, {
    duration: 0.8,
    delay: 0.3,
    ease: 'linear',
    width: '100%',
  })
  .to(arrowGroup, {
    duration: 0,
    opacity: 1
  })
  .to(text, {
    duration: 0,
    opacity: 1
  })
  .to(question, {
    duration: 0,
    opacity: 1
  })
  .to(overlay, {
    duration: 0.7,
    delay: 0.15,
    ease: 'linear',
    x: '120%',
  });
};
