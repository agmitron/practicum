function createAccordion(accordionId) {
  const accordion = document.getElementById(accordionId);
  const accordionButton = accordion.querySelector('.accordion__button')
  const accordionContent = accordion.querySelector('.accordion__content')

  accordionButton.addEventListener('click', () => {
    accordionButton.classList.toggle('accordion__button_rotated');
    accordionContent.classList.toggle('accordion__content_hidden');
  })
}

createAccordion('accordion1')
createAccordion('accordion2')
createAccordion('accordion3')
