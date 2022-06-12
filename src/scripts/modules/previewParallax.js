const hero = document.querySelector('.hero');
const windowInitialScrollY = window.scrollY;
hero.style.transform = `translateY(-${window.scrollY / 7}px)`;

const onScrollHandler = () => {
  hero.style.transform = `translateY(-${window.scrollY / 7}px)`;
}

window.addEventListener('scroll', onScrollHandler);
