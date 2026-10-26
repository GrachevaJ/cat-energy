/* в этот файл добавляет скрипты*/
const menuBtn = document.querySelector('.main-header__toggle');
const menuList = document.querySelector('.main-nav');
const toggleText = menuBtn.querySelector('.visually-hidden');
const slider = document.querySelector('.example__slider-input');
const resizeBefore = document.querySelector('.example__slider-resize--before');
const resizeAfter = document.querySelector('.example__slider-resize--after');
const sliderLine = document.querySelector('.example__slider-line');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('main-nav--opened');

  const isOpen = menuList.classList.contains('main-nav--opened');

  toggleText.textContent = isOpen ? 'Закрыть меню' : 'Открыть меню';

  menuBtn.classList.toggle('main-header__toggle--close', isOpen);
});

slider.addEventListener('input', (evt) => {
  const value = evt.target.value;

  resizeBefore.style.width = `${value}%`;
  resizeAfter.style.width = `${100 - value}%`;
  sliderLine.style.left = `${value}%`;
});
