import {gsap} from 'gsap';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const portfolioPage = document.querySelector('.portfolio-page');

if(portfolioPage) {
  let scroller;
  let isScrollerInited = false;
  const galleryItems = document.querySelectorAll('.portfolio-page .gallery__item');
  const body = document.querySelector('body');

  function initScroller() {
    isScrollerInited = true;
    scroller = ScrollSmoother.create({
      smooth: 1.5,               // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true,           // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });

    if(galleryItems) {
      galleryItems.forEach((item,i) => {
        scroller.effects(item, {lag: i%2 === 0 ? 0.4 : i%3 === 0 ? 0.5 : i%3 === 0 ? 0.3 : 0.7, speed: 1});
      })
    }
  }

  function destroyScroller() {
    isScrollerInited = false;
    scroller.kill();
  }

  if(window.innerWidth > 959) {
    initScroller();
  }

  /*Сортировка*/
  const sortBtns = document.querySelectorAll('.portfolio-sort button');
  const itemList = document.querySelectorAll('.gallery__item');

  const onClickSortItems = (evt) => {
    let current = evt.currentTarget;

    sortBtns.forEach(btn => {
      btn.classList.contains('active') && btn !== current ?
      btn.classList.remove('active') : null;
    })

    !current.classList.contains('active') ?
    current.classList.add('active') : null;

    let sortType = current.getAttribute('data-type');
    body.style.height = 'auto';
    if(isScrollerInited) {
      destroyScroller();
    }

    itemList.forEach((item,i) => {
      item.getAttribute('data-type') === sortType && sortType !== 'all' ?
      item.classList.remove('hidden') : item.classList.add('hidden');

      if(sortType === 'all') {
        item.classList.remove('hidden');
      }
    })

    if(window.innerWidth > 959 && !isScrollerInited) {
      initScroller();
    }
  }

  sortBtns.forEach(btn => {
    btn.addEventListener('click', onClickSortItems);
  })

  /*Сортировка конец*/

  window.addEventListener('resize', () => {
    if(window.innerWidth > 959 && !isScrollerInited) {
      initScroller();
    } else if(window.innerWidth < 960 && isScrollerInited) {
      destroyScroller();
    }
  })
}

