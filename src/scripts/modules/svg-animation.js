import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const paths = document.querySelectorAll('#svg path');
console.log(paths)

function animate(path, animationRule) {
  const length = path.getTotalLength();
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition = 'none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  path.style.transition = path.style.WebkitTransition = animationRule;
  // Go!
  path.style.strokeDashoffset = '0';

  gsap.to(path, {
    duration: 0.5,
    delay: 0.1,
    opacity: 1,
    y: 0,
    ease: 'ease-in'
  })
}

setTimeout(() => {
  paths.forEach((path,i) => {
    /*if(path.getAttribute('id') === 'elephant-body') {
      animate(path, 'stroke-dashoffset 1.5s linear');
    }

    if(path.getAttribute('id') === 'elephant-eye') {
      animate(path, 'stroke-dashoffset 0.0s 1.6s ease-in-out');
    } else { */
      console.log('animate')
    //}

    setTimeout(() => {
      animate(path, 'stroke-dashoffset 1.5s linear');
    }, 600 * (i+1));
  })
}, 500);

let svgs = document.querySelectorAll('.littleweb svg');
const dot = document.querySelector('#dot');

//animate(dot, 'stroke-dashoffset 0.0s 2.1s ease-in-out');

svgs.forEach((svg,i)=>{
  gsap.to(svg, {
    duration: 0.5,
    delay: 0.15 * (i+1),
    opacity: 1,
    y: '0',
    ease: 'ease-in'
  })
})

//dot.classList.add('rotate')
