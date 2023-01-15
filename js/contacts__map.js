// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.75846806898367,37.60108849999989],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14,
        controls: [],
    });

// Зададим произвольное расположение элементов.
  myMap.controls.add('zoomControl', {
    size: 'small',
    float: 'none',
    position: {
        bottom: '360px',
        right: '10px'
    }
  });

  myMap.controls.add('geolocationControl', {
    size: 'small',
    float: 'none',
    position: {
        bottom: '320px',
        right: '10px'
    }
  });

  var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/contacts/location.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -10]
  });

  myMap.behaviors.disable('scrollZoom');

  myMap.geoObjects.add(myPlacemark);
}
