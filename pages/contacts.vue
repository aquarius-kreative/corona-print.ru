<template>
  <v-container fluid class="pa-0 mb-5 contacts">
    <v-layout class="my-1">
      <v-flex xs12>
        <div class="h1-divider">
          <div class="divtext">
            <h1>Контакты</h1>
            <span></span>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-container grid-list-md>
      <v-layout row wrap justify-center>
        <v-flex xs12 md6>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Темрюк</h3>
              </div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon>room</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Россия, Краснодарский край
                    </v-list-tile-title>
                    <v-list-tile-title>
                      г. Темрюк, ул. Октябрьская 137
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon>phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title><a href="tel:+79180005816">+7 (918) 000-58-16</a></v-list-tile-title>
                    <v-list-tile-sub-title>Мобильный</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon>email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <a href="mailto:corona.print@mail.ru"
                         title="corona.print@mail.ru">corona.print@mail.ru</a>
                      |
                      <a href="mailto:info@corona-print.ru"
                         title="info@corona-print.ru">info@corona-print.ru</a>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon>alarm</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Часы работы
                    </v-list-tile-title>
                    <v-list-tile-sub-title>Пн-Пт: 09:00 - 17:00</v-list-tile-sub-title>
                    <v-list-tile-sub-title>Сб-Вс: Выходной</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon>description</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <a href="/doc/card.pdf" target="_blank">Реквизиты</a> | <a href="/doc/okved.pdf" target="_blank">ОКВЭД</a>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
            <v-divider></v-divider>
            <div id="temryuk-map"></div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  import ymaps from 'ymaps'

  export default {
    head: {
      title: 'Контакты',
      meta: [
        {hid: 'description', name: 'description', content: 'Контакты рекламного агентства КОРОНА PRINT'}
      ]
    },
    data: () => {
      return {
        placemarks: [
          {
            coords: [45.272277, 37.376505],
            properties: {}, // define properties here
            options: {}, // define options here
            clusterName: '1',
            callbacks: {
              click: function () {
              }
            }
          }
        ]
      }
    },
    mounted () {
      if (process.browser) {
        ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {
          const tmap = new maps.Map('temryuk-map', {
            center: [45.272277, 37.376505],
            zoom: 15,
            controls: ['zoomControl', 'typeSelector']
          })
          const tPoint = new maps.Placemark([45.272277, 37.376505],
            {
              hintContent: 'Корона Print'
            },
            {
              iconLayout: 'default#image',
              iconImageHref: '/img/map/marker.svg',
              iconImageSize: [60, 90],
              iconImageOffset: [-25, -78]
            })

          tmap.geoObjects.add(tPoint)
          tmap.behaviors.disable('scrollZoom')
        })
          .catch(error => console.log('Ошибка загрузки Яндекс.Карты', error))
      }
    }
  }
</script>

<style>
  #anapa-map {
    height: 300px;
  }

  #temryuk-map {
    height: 300px;
  }
</style>
