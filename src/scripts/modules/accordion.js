import {gsap} from 'gsap';

const accordion = document.querySelector('.accordion');
const headers = accordion.querySelectorAll('.accordion__header');
const fields = accordion.querySelectorAll('.accordion__field');

fields.forEach((field,i) => {
  field.style.left = 70 * i + 'px';
})

const onClickOpenAccordionField = (evt) => {
  const target = evt.currentTarget.parentNode;

  fields.forEach((field,i) => {
    if(target === field && !field.classList.contains('moved')) {

      if(!target.classList.contains('active')) {
        fields.forEach(field => {
          field.classList.contains('active') ?
          field.classList.remove('active') : null;
        })

        target.classList.add('active');
      }

      fields.forEach((field,j) => {
        //показ
        if(j > i) {

          if(!field.classList.contains('moved')) {
            gsap.to(field, {
              duration: 0.5,
              delay: 0.2,
              left: 'calc(100% - ' + 70 * (fields.length - j) + 'px)',
              ease: 'ease-in'
            })

            !field.classList.contains('moved') ?
            field.classList.add('moved') : null;
          }

        }
      })

    } else if(fields[i] === target && field.classList.contains('moved')) {
      if(!target.classList.contains('active')) {
        fields.forEach(field => {
          field.classList.contains('active') ?
          field.classList.remove('active') : null;
        })

        target.classList.add('active');
      }

      // скрытие
      fields.forEach((field,j) => {
        if(j < i + 1 ) {

          //field.style.left = 70 * j + 'px';

          if(field.classList.contains('moved')) {
            gsap.to(field, {
              duration: 0.5,
              delay: 0.2,
              left: 70 * j + 'px',
              ease: 'ease-in'
            })

            field.classList.contains('moved') ?
            field.classList.remove('moved') : null;
          }

        }
      });

    }
  })

}

headers.forEach(header => {
  header.addEventListener('click', onClickOpenAccordionField);
})
