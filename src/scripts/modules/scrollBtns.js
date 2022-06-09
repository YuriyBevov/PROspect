import { scrollIntoView } from "seamless-scroll-polyfill";
const scrollBtns = document.querySelectorAll('.anchor-link');

const onClickScrollToSection = (evt) => {
  evt.preventDefault();
  let anchor = evt.currentTarget.getAttribute('data-scroll-to');
  let target = document.querySelector('#' + anchor);

  scrollIntoView(target, { behavior: "smooth", block: "start"});
}

scrollBtns.forEach(btn => {
  btn.addEventListener('click', onClickScrollToSection);
})
