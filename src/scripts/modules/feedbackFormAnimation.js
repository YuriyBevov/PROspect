import Parallax from 'parallax-js'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, MorphSVGPlugin);

const form = document.querySelector('.feedback form');

if(form) {
  form.style.opacity = 0;
  form.style.transform = 'translateY(150px)';
  const text = document.querySelector('.feedback__text');
  const plane = document.querySelector('#plane');
  //plane.style.opacity = 0;*/

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: text,
      start: "top bottom",
    }
  });

  tl.from(text, {
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


    let planeTl1 = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top bottom",
      },
      repeat: '-1',
      repeatDelay: 2.5
    });

    planeTl1.from("#mail-svg", {
      duration: 0.7,
      delay: 1.2,
      opacity: 0,
      rotate: '360deg',
      y: '150px',
      ease: 'power1.out'
    }).to("#mail", {
      ease: "power1.in",
      duration: 1,
      delay: 1,
      morphSVG: "#plane"
    }).to("#mail", {
      duration: 0.6,
      x: '-30px',
      ease: "power1.out",
    }).to("#mail", {
      duration: 1.3,
      x: '150vw',
      y: '-80vh',
      ease: "power1.out",
    });

    /*gsap.to("#mail", {
      scrollTrigger: {
        trigger: text,
        start: "top bottom",
      },

      ease: "power1.inOut",
      duration: 3,
      morphSVG: "#plane"

    });*/

  /*gsap.to("#plane", {
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
  }, 750);*/
}
