import { Modal } from "../../utils/Modal";

export function sendForm(form) {
  const thanksModal = document.getElementById('thanks-modal');
  const errorModal = document.getElementById('error-modal');

  function success() {
    //form.reset();
    let modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
      new Modal(modal).refresh();
    })
    new Modal(thanksModal).show();
  }

  function error() {
    new Modal(errorModal).show();
  }

  // handle the form submission event

  var data = new FormData(form);
  ajax(form.method, form.action, data, success, error);

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  };
}
