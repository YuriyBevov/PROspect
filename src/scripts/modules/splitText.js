import {gsap} from 'gsap';
import {SplitText} from 'gsap/SplitText';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(SplitText, ScrollTrigger);

const texts = document.querySelectorAll('.gsap-split');

const options = {
  duration: .3,
  delay: 0.2,
  opacity: 0,
  scale: 0,
  y: 50,
  rotationX: 0,
  //transformOrigin: "0% 50% -50",
  ease: "back",
  stagger: 0.05
};

texts.forEach(text => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: text,
      start: "top bottom",
    }
  }),
    mySplitText = new SplitText(text, { type: "words,chars" }),
    chars = mySplitText.chars;

  //gsap.set(text, { perspective: 400 });

  tl.from(chars, options);
});
