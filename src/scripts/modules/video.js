import videojs from "video.js";
const videos = document.querySelectorAll('video');

if(videos) {

  videos.forEach(video => {
    let player = videojs(video, {
      preload: 'auto',
      loop: true,
      width: '100%',
    });

    player.requestFullscreen();
    let observer = new IntersectionObserver(entries => {
      entries.forEach( entry => {
        if(entry.isIntersecting) {
          player.autoplay('muted');
        } else {
          player.pause();
        }
      });
    });
    observer.observe(video);

    const spinner = video.parentNode.querySelector('.vjs-loading-spinner');
    let loader = document.createElement('div');
    loader.classList.add('loader');

    for(let i = 0; i < 3; i++) {
      let item = document.createElement('div');
      item.classList.add('loader-item');
      loader.appendChild(item);
    }

    spinner.appendChild(loader);

  });
};
