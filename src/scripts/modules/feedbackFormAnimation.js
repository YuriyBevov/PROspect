import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const text = document.querySelector('.feedback__text');
const form = document.querySelector('.feedback form');
form.style.opacity = 0;
form.style.transform = 'translateY(150px)';

let feedbackTl = gsap.timeline({
  scrollTrigger: {
    trigger: text,
    start: "top bottom",
  }
});

feedbackTl.from(text, {
    duration: .6,
    delay: 0.2,
    opacity: 0,
    ease: "linear"
  })
  .to(form, {
    duration: 0.6,
    opacity: 1,
    y: 0,
    ease: "ease-in"
  });
