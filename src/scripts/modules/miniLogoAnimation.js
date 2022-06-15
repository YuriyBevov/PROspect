const header = document.querySelector('.main-header');

if(header) {
  let trigger = document.querySelector('.section');

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
