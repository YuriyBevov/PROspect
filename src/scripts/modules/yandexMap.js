ymaps.ready(init);

function init(){
    // Создание карты.
    let myMap = new ymaps.Map("yandex_map", {
        center: [59.827409222455735,30.416959880950902],
        zoom: 13,
        controls: [],
        behaviors: ['drag'],
    });

    // Метка
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'assets/img/map-placeholder.svg',
      // Размеры метки.
      iconImageSize: [50, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -25]
    });

    myMap.geoObjects.add(myPlacemark);

    // ZOOM-CONTROL
    let ZoomLayout = ymaps.templateLayoutFactory.createClass(
      //Шаблон html кнопок зума
      "<div class='zoom-btns'>"                                   +
          "<button id='zoom-in' class='zoom-btn zoom-btn-in'>"    +
              "<svg width='14' height='14'>"                      +
                  "<use xlink:href='./assets/svg-sprite.svg#icon-zoom-in'>"   +
              "</svg>"                                            +
          "</button>"                                             +

          "<button id='zoom-out' class='zoom-btn zoom-btn-out'>"  +
              "<svg width='14' height='2'>"                       +
                  "<use xlink:href='./assets/svg-sprite.svg#icon-zoom-out'>"  +
              "</svg>"                                            +
          "</button>"                                             +
      "</div>"                                                    , {

      // Переопределяем методы макета, чтобы выполнять дополнительные действия
      // при построении и очистке макета.
      build: function () {
          // Вызываем родительский метод build.
          ZoomLayout.superclass.build.call(this);

          // Привязываем функции-обработчики к контексту и сохраняем ссылки
          // на них, чтобы потом отписаться от событий.
          this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
          this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

          // Начинаем слушать клики на кнопках макета.
          let zoomInBtn = document.getElementById('zoom-in');
          let zoomOutBtn = document.getElementById('zoom-out');

          zoomInBtn.addEventListener('click', this.zoomInCallback);
          zoomOutBtn.addEventListener('click', this.zoomOutCallback);
      },

      clear: function () {
          // Снимаем обработчики кликов.
          zoomInBtn.removeEventListener('click', this.zoomInCallback);
          zoomOutBtn.removeEventListener('click', this.zoomOutCallback);
          // Вызываем родительский метод clear.
          ZoomLayout.superclass.clear.call(this);
      },

      zoomIn: function () {
          myMap.balloon.close();

          let map = this.getData().control.getMap();
          map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
      },

      zoomOut: function () {
          myMap.balloon.close();

          let map = this.getData().control.getMap();
          map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
      }
  });

  zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout, position: {right: '30px', bottom: '50px'} } });
  myMap.controls.add(zoomControl);
};
