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


// Карта
function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(34.7682482,-111.713764)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  //var image = "http://i.neoseeker.com/mgv/499846/846/33/15847_179440563793_179437393793_2772323_4548598_n_icon.jpg";
  var myLatLng = new google.maps.LatLng(34.7682482,-111.713764);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    //icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
