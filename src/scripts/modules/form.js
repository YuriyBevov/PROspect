import { formValidation } from "./form/formValidation";

const forms = document.querySelectorAll('form');

const onClickSendForm = (evt) => {
  evt.preventDefault();
  formValidation(evt.target.closest('form'));
}

forms.forEach(form => {
  let button = form.querySelector('button[type="submit"]');

  button.addEventListener('click', onClickSendForm);
})
