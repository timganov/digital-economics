const toggleButtons = document.querySelectorAll('.js-learn__block-toggle');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const content = button.closest('.learn__item').querySelector('.js-learn__content');
    const icon = button.querySelector('.js-learn__block-toggle-img');

    content.classList.toggle('active');
    icon.classList.toggle('rotate');
  });
});
