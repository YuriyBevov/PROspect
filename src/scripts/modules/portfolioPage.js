/*import {gsap} from 'gsap';
import Masonry from 'masonry-layout';
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
      scroller.effects(item, {lag: i%2 === 0 ? 0.4 : i%3 === 0 ? 0.3 : i%3 === 0 ? 0.2 : 0.1, speed: 1});
    })
  }
}*/

/*import Masonry from 'masonry-layout';
const elem = document.querySelector('.grid');
let msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  //horizontalOrder: true,
  //fitWidth: true,
  percentPosition: true,
  gutter: 5
}); */

/*setTimeout(() => {
  console.log(msnry)
  msnry.layout();
}, 700); */




/*Сортировка*/
const sortBtns = document.querySelectorAll('.portfolio-sort button');
const itemList = document.querySelectorAll('.gallery__item');

const onClickSortItems = (evt) => {
  let current = evt.currentTarget;
  let sortType = current.getAttribute('data-type');

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
})

/*Сортировка конец*/
