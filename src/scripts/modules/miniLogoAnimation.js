import {gsap} from 'gsap';

const header = document.querySelector('.main-header');
const headerLogo = header.querySelector('.main-header__small-logo');

function showLogo() {
  gsap.to(headerLogo, {
    duration: 0.7,
    delay: 0.2,
    opacity: 1,
    zIndex: '99',
    y: 0,
    ease: 'ease-in'
  })

  header.classList.add('active');
}

function hideLogo() {
  gsap.to(headerLogo, {
    duration: 0.5,
    delay: 0.2,
    opacity: 0,
    zIndex: '-1',
    ease: 'ease-in'
  })

  gsap.to(headerLogo, {
    duration: 0,
    delay: 0.7,
    y: '-200'
  })

  header.classList.remove('active');
}

if(headerLogo) {
  if(window.scrollY > 600) {
    showLogo();
  } else {
    hideLogo();
  }

  window.addEventListener('scroll', () => {
    if(window.scrollY > 600) {
      showLogo();
    } else {
      hideLogo();
    }
  });
}
