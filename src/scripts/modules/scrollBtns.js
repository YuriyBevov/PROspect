import {gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const scrollBtns = document.querySelectorAll('.anchor-link');

const onClickScrollToSection = (evt) => {
  evt.preventDefault();
  let anchor = evt.currentTarget.getAttribute('data-scroll-to');
  let target = document.querySelector('#' + anchor);

  gsap.to(window, {duration: 2, scrollTo: {y: target, offsetY: 60, autoKill: false}, ease: "power2"});
}

scrollBtns.forEach(btn => {
  btn.addEventListener('click', onClickScrollToSection);
})
