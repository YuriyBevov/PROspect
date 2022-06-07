const accordion = document.querySelector('.accordion');
const headers = accordion.querySelectorAll('.accordion__header');
const fields = accordion.querySelectorAll('.accordion__field');

fields.forEach((field,i) => {
  field.style.left = 70*i + 'px';
})

const onClickOpenAccordionField = (evt) => {
  const target = evt.currentTarget.parentNode;



  fields.forEach((field,i) => {
    if(target === field && !field.classList.contains('moved')) {

      fields.forEach((field,j) => {
        if(j > i) {
          !field.classList.contains('moved') ?
          field.classList.add('moved') : null;
          field.style.left = 'calc(100% - ' + 70 * (fields.length - j) + 'px)'
        }
      })

    } else if(fields[i] === target && field.classList.contains('moved')) {

      fields.forEach((field,j) => {
        if(j < i + 1 ) {
          field.classList.contains('moved') ?
          field.classList.remove('moved') : null;
          field.style.left = 70 * j + 'px';
        }
      });

    }
  })

}

headers.forEach(header => {
  header.addEventListener('click', onClickOpenAccordionField);
})
