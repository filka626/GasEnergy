ymaps.ready(init);
var myMap,
    myPlacemark1,
    myPlacemark2,
    myPlacemark3,
    myPlacemark4,
    myPlacemark5,
    myPlacemark6,
    myPlacemark7,
    myPlacemark8,
    myPlacemark9,
    myPlacemark10,
    myPlacemark11,
    myPlacemark12;

function init(){
     myMap = new ymaps.Map('map', {
        center: [54.73769605150554,55.97940552659522], //координаты области
        zoom: 13,
        controls:[]
    });
    myPin = new ymaps.GeoObjectCollection({},{
        iconLayout: 'default#image',
        iconImageHref: "img/map_pin.svg",
        iconImageSize: [30, 34],
        iconImageOffset: [-3,-42]
    });

    myPlacemark1 = new ymaps.Placemark([54.72126520490075,55.98319675297372], //координаты метки
    {
    balloonContentBody: 'АЗГС: ЗАО “Северное”',
    balloonContentFooter: 'Проспект Салавата Юлаева, 31 </br> <a href="tel:+78005553535">+7 800 555 35 35</a>'
    });

    myPlacemark2 = new ymaps.Placemark([54.73283501809734,55.99281858314659], //координаты метки
        {
        balloonContentBody: 'Название',
        balloonContentFooter: 'Адрес </br> <a href="tel:+78005553535">+7 800 555 35 35</a>'
        });
       
    myPlacemark3 = new ymaps.Placemark([54.73814054859857,55.992049806233275], //координаты метки
        {
        balloonContentBody: 'Название',
        balloonContentFooter: 'Адрес </br> <a href="tel:+78005553535">+7 800 555 35 35</a>'
        });
    myPlacemark4 = new ymaps.Placemark([54.743555874686905,55.98695862718112], //координаты метки
        {
        balloonContentBody: 'Название',
        balloonContentFooter: 'Адрес </br> <a href="tel:+78005553535">+7 800 555 35 35</a>'
        });
    
    myPlacemark5 = new ymaps.Placemark([54.74241377257123,55.981165055709], //координаты метки
        {
        balloonContentBody: 'Название',
        balloonContentFooter: 'Адрес </br> <a href="tel:+78005553535">+7 800 555 35 35</a>'
        });
    myPlacemark6 = new ymaps.Placemark([54.73806852323486,55.979791764693374], //координаты метки
        {
        balloonContentBody: 'Название',
        balloonContentFooter: 'Адрес </br> <a href="tel:+78005553535">+7 800 555 35 35</a>'
        });
    myPlacemark7 = new ymaps.Placemark([54.748757370574566,55.9826733263107], //координаты метки
        {
        balloonContentBody: 'Название',
        balloonContentFooter: 'Адрес </br> <a href="tel:+78005553535">+7 800 555 35 35</a>'
        });
    myPlacemark8 = new ymaps.Placemark([54.74932833583489,55.99044146914715], //координаты метки
        {
        balloonContentBody: 'Название',
        balloonContentFooter: 'Адрес </br> <a href="tel:+78005553535">+7 800 555 35 35</a>'
        });
    myPlacemark9 = new ymaps.Placemark([54.74942763331554,56.00559058566326], //координаты метки
        {
        balloonContentBody: 'Название',
        balloonContentFooter: 'Адрес </br> <a href="tel:+78005553535">+7 800 555 35 35</a>'
        });
    myPlacemark10 = new ymaps.Placemark([54.738230301429184,56.02301421542399], //координаты метки
        {
        balloonContentBody: 'Название',
        balloonContentFooter: 'Адрес </br> <a href="tel:+78005553535">+7 800 555 35 35</a>'
        });
    myPlacemark11 = new ymaps.Placemark([54.71937899041183,55.94889941592447], //координаты метки
        {
        balloonContentBody: 'Название',
        balloonContentFooter: 'Адрес </br> <a href="tel:+78005553535">+7 800 555 35 35</a>'
        });
    myPlacemark12 = new ymaps.Placemark([54.74319624252918,55.957353738739414], //координаты метки
        {
        balloonContentBody: 'Название',
        balloonContentFooter: 'Адрес </br> <a href="tel:+78005553535">+7 800 555 35 35</a>'
        });

myPin.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4).add(myPlacemark5).add(myPlacemark6).add(myPlacemark7).add(myPlacemark8).add(myPlacemark9).add(myPlacemark10).add(myPlacemark11).add(myPlacemark12);
myMap.geoObjects.add(myPin);
myMap.controls.remove('zoomControl');
};

//открытие нужной метки на карте при помощи data атрибутов

$('.b1').each(function() {
    var self = $(this);
    self.bind({
      click: function(e) {
        e.preventDefault();
        longitude = self.parents('.div1').attr('data-longitude');
        latitude = self.parents('.div1').attr('data-latitude');
        myPlacemark1.geometry.setCoordinates([longitude, latitude]);
        myMap.setCenter(myPlacemark1.geometry.getCoordinates());
        myMap.setZoom(17);
        myPlacemark1.balloon.open();
      }
    })
  });

  $('.b2').each(function() {
    var self = $(this);
    self.bind({
      click: function(e) {
        e.preventDefault();
        longitude = self.parents('.div2').attr('data-longitude');
        latitude = self.parents('.div2').attr('data-latitude');
        myPlacemark1.geometry.setCoordinates([longitude, latitude]);
        myMap.setCenter(myPlacemark1.geometry.getCoordinates());
        myMap.setZoom(17);
        myPlacemark2.balloon.open();
      }
    })
  });

  $('.b3').each(function() {
    var self = $(this);
    self.bind({
      click: function(e) {
        e.preventDefault();
        longitude = self.parents('.div3').attr('data-longitude');
        latitude = self.parents('.div3').attr('data-latitude');
        myPlacemark1.geometry.setCoordinates([longitude, latitude]);
        myMap.setCenter(myPlacemark1.geometry.getCoordinates());
        myMap.setZoom(17);
        myPlacemark3.balloon.open();
      }
    })
  });

  $('.b4').each(function() {
    var self = $(this);
    self.bind({
      click: function(e) {
        e.preventDefault();
        longitude = self.parents('.div4').attr('data-longitude');
        latitude = self.parents('.div4').attr('data-latitude');
        myPlacemark1.geometry.setCoordinates([longitude, latitude]);
        myMap.setCenter(myPlacemark1.geometry.getCoordinates());
        myMap.setZoom(17);
        myPlacemark4.balloon.open();
      }
    })
  });

  $('.b5').each(function() {
    var self = $(this);
    self.bind({
      click: function(e) {
        e.preventDefault();
        longitude = self.parents('.div5').attr('data-longitude');
        latitude = self.parents('.div5').attr('data-latitude');
        myPlacemark1.geometry.setCoordinates([longitude, latitude]);
        myMap.setCenter(myPlacemark1.geometry.getCoordinates());
        myMap.setZoom(17);
        myPlacemark5.balloon.open();
      }
    })
  });

  $('.b6').each(function() {
    var self = $(this);
    self.bind({
      click: function(e) {
        e.preventDefault();
        longitude = self.parents('.div6').attr('data-longitude');
        latitude = self.parents('.div6').attr('data-latitude');
        myPlacemark1.geometry.setCoordinates([longitude, latitude]);
        myMap.setCenter(myPlacemark1.geometry.getCoordinates());
        myMap.setZoom(17);
        myPlacemark6.balloon.open();
      }
    })
  });

  $('.b7').each(function() {
    var self = $(this);
    self.bind({
      click: function(e) {
        e.preventDefault();
        longitude = self.parents('.div7').attr('data-longitude');
        latitude = self.parents('.div7').attr('data-latitude');
        myPlacemark1.geometry.setCoordinates([longitude, latitude]);
        myMap.setCenter(myPlacemark1.geometry.getCoordinates());
        myMap.setZoom(17);
        myPlacemark7.balloon.open();
      }
    })
  });

  $('.b8').each(function() {
    var self = $(this);
    self.bind({
      click: function(e) {
        e.preventDefault();
        longitude = self.parents('.div8').attr('data-longitude');
        latitude = self.parents('.div8').attr('data-latitude');
        myPlacemark1.geometry.setCoordinates([longitude, latitude]);
        myMap.setCenter(myPlacemark1.geometry.getCoordinates());
        myMap.setZoom(17);
        myPlacemark8.balloon.open();
      }
    })
  });

  $('.b9').each(function() {
    var self = $(this);
    self.bind({
      click: function(e) {
        e.preventDefault();
        longitude = self.parents('.div9').attr('data-longitude');
        latitude = self.parents('.div9').attr('data-latitude');
        myPlacemark1.geometry.setCoordinates([longitude, latitude]);
        myMap.setCenter(myPlacemark1.geometry.getCoordinates());
        myMap.setZoom(17);
        myPlacemark9.balloon.open();
      }
    })
  });

  $('.b10').each(function() {
    var self = $(this);
    self.bind({
      click: function(e) {
        e.preventDefault();
        longitude = self.parents('.div10').attr('data-longitude');
        latitude = self.parents('.div10').attr('data-latitude');
        myPlacemark1.geometry.setCoordinates([longitude, latitude]);
        myMap.setCenter(myPlacemark1.geometry.getCoordinates());
        myMap.setZoom(17);
        myPlacemark10.balloon.open();
      }
    })
  });

  $('.b11').each(function() {
    var self = $(this);
    self.bind({
      click: function(e) {
        e.preventDefault();
        longitude = self.parents('.div11').attr('data-longitude');
        latitude = self.parents('.div11').attr('data-latitude');
        myPlacemark1.geometry.setCoordinates([longitude, latitude]);
        myMap.setCenter(myPlacemark1.geometry.getCoordinates());
        myMap.setZoom(17);
        myPlacemark11.balloon.open();
      }
    })
  });

  $('.b12').each(function() {
    var self = $(this);
    self.bind({
      click: function(e) {
        e.preventDefault();
        longitude = self.parents('.div12').attr('data-longitude');
        latitude = self.parents('.div12').attr('data-latitude');
        myPlacemark1.geometry.setCoordinates([longitude, latitude]);
        myMap.setCenter(myPlacemark1.geometry.getCoordinates());
        myMap.setZoom(17);
        myPlacemark12.balloon.open();
      }
    })
  });
//скролл до карты
$(".address").click(function () {
    $("body,html").animate({
        scrollTop:0
    }, 500);
});