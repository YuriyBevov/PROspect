import Parallax from 'parallax-js'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const form = document.querySelector('.feedback form');
if(form) {
  form.style.opacity = 0;
  form.style.transform = 'translateY(150px)';
  const text = document.querySelector('.feedback__text');
  const plane = document.querySelector('#plane');
  plane.style.opacity = 0;

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

  gsap.to("#plane", {
    scrollTrigger: {
      trigger: text,
      start: "top bottom",
    },

    duration: 2,
    delay: 0.5,
    opacity: 1,
    ease: "power1.inOut",
    motionPath:{
      path: "#path",
      align: "#path",
      alignOrigin: [0.5, 0.5]
    }
  });

  setTimeout(() => {
    const scene = document.getElementById('scene');
    let parallaxInstance = new Parallax(scene);
  }, 750);
}
