// Маркер работающего JS
document.documentElement.classList.add('js');

// Мобильное меню
// Получаем элементы
var nav = document.querySelector('.main-nav__list');
var buttClose = document.querySelector('.main-nav__toggle');

// Класс, обозначающий закрытое меню
var statusClose = 'main-nav__list--closed';
nav.classList.toggle(statusClose);

// Событие по нажатию на кнопку
buttClose.onclick = function () {
  nav.classList.toggle(statusClose);
}



// Карта
function initialize() {
  var myLatLng = {lat: 34.86973, lng: -111.76098};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.querySelector(".map"), {
    center: myLatLng,
    //scrollwheel: false,
    zoom: 7
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng
  });

  google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(myLatLng);
    });
}

