import {gsap} from 'gsap';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const portfolioPage = document.querySelector('.portfolio-page');

if(portfolioPage) {
  let scroller = ScrollSmoother.create({
    smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });

  const galleryItems = document.querySelectorAll('.portfolio-page .gallery__item');

  if(galleryItems) {
    galleryItems.forEach((item,i) => {
      scroller.effects(item, {lag: i%2 === 0 ? 0.4 : i%3 === 0 ? 0.5 : i%3 === 0 ? 0.3 : 0.7, speed: 1});
    })
  }

  /*Сортировка*/
  const sortBtns = document.querySelectorAll('.portfolio-sort button');
  const itemList = document.querySelectorAll('.gallery__item');

  const onClickSortItems = (evt) => {
    let current = evt.currentTarget;
    let sortType = current.getAttribute('data-type');
    scroller.kill();

    itemList.forEach(item => {
      item.getAttribute('data-type') === sortType && sortType !== 'all' ?
      item.classList.remove('hidden') : item.classList.add('hidden');

      if(sortType === 'all') {
        item.classList.remove('hidden')
      }
    })

    ScrollSmoother.create({
      smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true,           // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    })
  }

  sortBtns.forEach(btn => {
    btn.addEventListener('click', onClickSortItems);
  })

  /*Сортировка конец*/

}

