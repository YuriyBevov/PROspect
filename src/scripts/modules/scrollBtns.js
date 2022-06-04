import { scrollIntoView } from "seamless-scroll-polyfill";
const scrollBtns = document.querySelectorAll('.anchor-link');
console.log(scrollBtns)

const onClickScrollToSection = (evt) => {
  evt.preventDefault();
  let anchor = evt.currentTarget.getAttribute('data-scroll-to');
  console.log(anchor)
  let target = document.querySelector('#' + anchor);
  console.log(target)

  scrollIntoView(target, { behavior: "smooth", block: "start"});
}

scrollBtns.forEach(btn => {
  btn.addEventListener('click', onClickScrollToSection);
})
