const heroBlock = document.querySelector('#hero');
const firstSection = document.querySelector('#first-section');

console.log(heroBlock, firstSection);
let posY = window.scrollY;
console.log(window.scrollY)
heroBlock.style.top = `-${window.scrollY / 40}%`

const onScrollHandler = () => {
  console.log(posY - window.scrollY)

  if(posY - window.scrollY > 0) {
    heroBlock.style.top = 0;
  } else {
    heroBlock.style.top = ((posY - window.scrollY) / 40 ) + 1 + '%';
  }
}

document.addEventListener('scroll', onScrollHandler);
