
const hero = document.querySelector('.hero');
const windowInitialScrollY = window.scrollY;

const onScrollHandler = (evt) => {
  console.log(window.scrollY);

  hero.style.transform = `translateY(${window.scrollY})`;
}

window.addEventListener('scroll', onScrollHandler);
