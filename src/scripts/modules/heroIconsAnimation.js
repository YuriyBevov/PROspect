import {gsap} from 'gsap';

const icons = document.querySelectorAll('.hero__icons a');

export function heroIconsAnimation() {
  if(icons.length) {
    icons.forEach((icon,i) => {
      gsap.to(icon, {
        duration: .7,
        delay: .5 * ((i+1)/3),
        y: '0',
        opacity: 1,
        scale: 1,
        ease: 'power1',
        borderColor: 'var(--primary-color)'
      })
    })

    let phone = icons[1].querySelector('svg');
    let tl = gsap.timeline({repeat: -1, repeatDelay: 3});

    tl.to(phone, {
      duration: 0.03,
      x: -3,
      ease: 'power2'
    })
    .to(phone, {
      duration: 0.03,
      x: 3,
      ease: 'power2'
    })
    .to(phone, {
      duration: 0.03,
      x: -3,
      ease: 'power2'
    })
    .to(phone, {
      duration: 0.03,
      x: 3,
      ease: 'power2'
    })
    .to(phone, {
      duration: 0.03,
      x: 0,
      ease: 'power2'
    })
  }
};
