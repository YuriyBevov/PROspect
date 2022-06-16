/*import barba from '@barba/core';

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollSmoother} from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/*Сортировка*/
/*const sortBtns = document.querySelectorAll('.portfolio-sort button');
const itemList = document.querySelectorAll('.gallery__item');

const onClickSortItems = (evt) => {
  let current = evt.currentTarget;
  let sortType = current.getAttribute('data-type');
  ScrollSmoother.kill();

  itemList.forEach(item => {
    item.getAttribute('data-type') === sortType && sortType !== 'all' ?
    item.classList.remove('hidden') : item.classList.add('hidden');

    if(sortType === 'all') {
      item.classList.remove('hidden')
    }
  })
}

sortBtns.forEach(btn => {
  btn.addEventListener('click', onClickSortItems);
})*/

/*Сортировка конец*/
