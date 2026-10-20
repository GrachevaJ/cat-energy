/* в этот файл добавляет скрипты*/
const menuBtn = document.querySelector('.main-header__toggle');
const menuList = document.querySelector('.main-nav');
const toggleText = menuBtn.querySelector('.visually-hidden');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('main-nav--opened');

  const isOpen = menuList.classList.contains('main-nav--opened');

  toggleText.textContent = isOpen ? 'Закрыть меню' : 'Открыть меню';

  menuBtn.classList.toggle('main-header__toggle--close', isOpen);
});
