
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
//import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(ScrollTrigger, /*MotionPathPlugin,*/ MorphSVGPlugin);

const form = document.querySelector('.feedback form');

if(form) {
  form.style.opacity = 0;
  form.style.transform = 'translateY(150px)';
  const text = document.querySelector('.feedback__text');

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
      duration: .5,
      delay: 1,
      morphSVG: {
        shape: "#plane",
        type: 'rotational',
        origin: "26% 14%, 34% -13%"
      }
    }).to("#mail", {
      duration: 0.6,
      delay: 0.2,
      x: '-40px',
      ease: "power1.out",
    }).to("#mail", {
      duration: 1.3,
      x: '150vw',
      y: '-300px',
      ease: "power1.out",
    });
}
