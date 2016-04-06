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
/*function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(34.86973,-111.76098)
  }
  //var map = new google.maps.Map(document.getElementById('map-canvas'),
                                //mapOptions);
  var map = document.querySelector(".map");
  var myLatLng = new google.maps.LatLng(34.86973,-111.76098);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}*/
//google.maps.event.addDomListener(window, 'load', initialize);


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
}
