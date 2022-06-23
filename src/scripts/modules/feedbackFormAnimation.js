import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
import {MotionPathHelper} from 'gsap/MotionPathHelper';
gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, MotionPathPlugin, MotionPathHelper);

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

    //--- plane2

    const tween = gsap.to("#plane", {
      repeat: -1,
      repeatDelay: 2.5,
      motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true
      },
      transformOrigin: "50% 50%",
      duration: 2,
      scale: 0,
      ease: "power2.ease"
    });

   //MotionPathHelper.create(tween);

    /*let planeTl1 = gsap.timeline({
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
      y: '-40vh',
      ease: "power1.out",
    });*/
}
