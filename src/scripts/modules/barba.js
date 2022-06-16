import barba from '@barba/core';

barba.init({

  views: [{
    namespace: 'home',
    beforeEnter() {
      // update the menu based on user navigation
      //menu.update();
    },
    afterEnter() {
      console.log('on Home')
    }
  }],

  transitions: [{
    name: 'default-transition',
    leave(data) {
      console.log('leave', data.current, data.next);
    },
    enter(data) {
      console.log('enter', data.next.namespace);
    }
  }]
});
