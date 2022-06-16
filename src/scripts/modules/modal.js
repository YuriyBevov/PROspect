import { Modal } from '../utils/Modal.js';

let modals = document.querySelectorAll('.modal');

if(modals) {
  modals.forEach(modal => {
      new Modal(modal);
  });
}

