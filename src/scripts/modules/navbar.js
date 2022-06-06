import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const burger = document.querySelector('.js-menu-opener');
const topline = burger.querySelector('.burger__line--top');
const midline = burger.querySelector('.burger__line--middle');
//const midlineR = burger.querySelector('.burger__line--middle-right');
const bottomline = burger.querySelector('.burger__line--bottom');

const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navItems = nav.querySelectorAll('.nav__item');
const navUnderline = document.querySelector('.nav__underline');

const onClickOpenNav = (evt) => {
  evt.preventDefault();

  burger.removeEventListener('click', onClickOpenNav);

  if(!burger.classList.contains('opened')) {
    burger.classList.add('opened');
    nav.classList.add('mobile-opened');
    navList.classList.add('opened');

    //линия
    gsap.to(navUnderline, {
      duration: 0.7,
      delay: 0.3,
      x: 0,
      ease: 'ease-in'
    });

    //ссылки
    navItems.forEach((item, i) => {
      gsap.to(item, {
        duration: 0.4,
        delay: 0.15 * ( i + 1 ),
        opacity: 1,
        y: 0,
        ease: 'ease-in'
      })
    });

    //burger

    //midlines
    gsap.to(midline, {
      duration: .7,
      delay: 0.1,
      x: '-40px',
      ease: 'ease-in-out'
    })
    /*gsap.to(midlineR, {
      duration: .7,
      delay: 0.1,
      x: '40px',
      ease: 'ease-in-out'
    }) */
    //topline
    gsap.from(topline, {
      duration: 0,
      opacity: 0,
      width: 0,
      y: '10px',
      rotate: 0,
      ease: 'ease-in-out'
    })
    gsap.to(topline, {
      duration: .7,
      opacity: 1,
      width: '30px',
      y: '10px',
      rotate: '45deg',
      ease: 'ease-in-out'
    })
    //bottomLine
    gsap.from(bottomline, {
      duration: 0,
      opacity: 0,
      width: 0,
      y: '-10px',
      rotate: 0,
      ease: 'ease-in-out'
    })
    gsap.to(bottomline, {
      duration: .7,
      opacity: 1,
      width: '30px',
      y: '-10px',
      rotate: '-45deg',
      ease: 'ease-in-out'
    })

    setTimeout(() => {
      burger.addEventListener('click', onClickOpenNav);
    }, 1200);

  } else {

    //линия
    gsap.to(navUnderline, {
      duration: 0.7,
      delay: 0,
      x: '100%',
      ease: 'ease-in'
    });

    //ссылки
    navItems.forEach((item, i) => {
      gsap.to(item, {
        duration: 0.4,
        delay: 0.15 * ( i + 1 ),
        opacity: 0,
        scale: 0,
        y: 0,
        ease: 'ease-in'
      });
    });

    //burger
    //midlines
    gsap.to(midline, {
      duration: .7,
      delay: 0.6,
      x: '0',
      ease: 'ease-in-out'
    })
    /*gsap.to(midlineR, {
      duration: .7,
      delay: 0.6,
      x: '0',
      ease: 'ease-in-out'
    })*/
    //topline
    gsap.from(topline, {
      duration: 0,
      opacity: 0,
      width: 0,
      y: '0',
      rotate: 0,
      ease: 'ease-in-out'
    })
    gsap.to(topline, {
      duration: .7,
      opacity: 1,
      width: '30px',
      y: '0',
      rotate: '0',
      ease: 'ease-in-out'
    })
    //bottomline
    gsap.from(bottomline, {
      duration: 0,
      opacity: 0,
      width: 0,
      y: '0',
      rotate: 0,
      ease: 'ease-in-out'
    })
    gsap.to(bottomline, {
      duration: .7,
      opacity: 1,
      width: '30px',
      y: '0',
      rotate: '0',
      ease: 'ease-in-out'
    })

    // refresh
    setTimeout(() => {
      navItems.forEach(item => {
        gsap.to(item, {
          duration: 0.1,
          delay: 0,
          scale: 1,
          y: '-250px',
          ease: 'ease-in'
        });
      });
      burger.classList.remove('opened');
      navList.classList.remove('opened');
      nav.classList.remove('mobile-opened');

      burger.addEventListener('click', onClickOpenNav);
    }, 1200);
  }
}

burger.addEventListener('click', onClickOpenNav);
