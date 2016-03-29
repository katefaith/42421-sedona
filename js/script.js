// Мобильное меню
// Получаем элементы
var nav = document.querySelector('.main-nav__list');
var buttClose = document.querySelector('.main-nav__toggle');

// Класс, обозначающий закрытое меню
var statusClose = 'main-nav__list--closed';

// Событие по нажатию на кнопку
buttClose.onclick = function () {
  nav.classList.toggle(statusClose);
}
