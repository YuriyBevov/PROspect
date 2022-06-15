import videojs from "video.js";
const videos = document.querySelectorAll('video');

if(videos) {
  videos.forEach(video => {
    let player = videojs(video, {
      preload: 'auto',
      loop: true,
      width: '100%',
    });

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
  })
}
