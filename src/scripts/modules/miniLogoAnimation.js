const header = document.querySelector('.main-header');
const headerLogo = header.querySelector('.main-header__small-logo');

let trigger = document.querySelector('.section');

if(headerLogo) {
  if(trigger.getBoundingClientRect().top < 80) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  window.addEventListener('scroll', () => {
    if(trigger.getBoundingClientRect().top < 80) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });
}
