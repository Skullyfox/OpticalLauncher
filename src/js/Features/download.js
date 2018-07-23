const buttonDown = document.querySelector('.testDown'),
      barDown    = document.querySelector('.bar');

buttonDown.addEventListener('click', () => {
  barDown.classList.add('downOk')
});