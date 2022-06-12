import { scrollBy } from "seamless-scroll-polyfill";
const scrollBtns = document.querySelectorAll('.anchor-link');

function getCoords(elem) {
  return elem.getBoundingClientRect().top - 55;
}

const onClickScrollToSection = (evt) => {
  evt.preventDefault();
  let anchor = evt.currentTarget.getAttribute('data-scroll-to');
  let target = document.querySelector('#' + anchor);

  scrollBy(window, { behavior: "smooth", top: getCoords(target) });
}

scrollBtns.forEach(btn => {
  btn.addEventListener('click', onClickScrollToSection);
})
