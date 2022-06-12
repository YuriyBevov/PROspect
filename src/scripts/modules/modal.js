import { Modal } from '../utils/Modal.js';

let modals = document.querySelectorAll('.modal');

modals.forEach(modal => {
    new Modal(modal);
})
