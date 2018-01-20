<template>
  <v-container fluid class="pa-0" grid-list-xs>
    <v-layout row wrap>
      <v-flex xs6 md2 class="mt-3 mb-3">
        <div class="cp-pos-relative" @click="linkTo('outdoor')">
          <div class="cp-tile">
            <div class="cp-tile-img text-xs-center pa-2">
              <div
                class="tile-img"
                style="background: url('/img/panels/tile/naruzhka.png'); background-size: cover; background-position-y: 100%;">
              </div>
            </div>
            <div class="cp-tile-text text-xs-center">
              <nuxt-link to="/service/outdoor" class="white--text" title="Наружняя реклама">Наружная реклама</nuxt-link>
            </div>
            <svg class="polytext" height="80" width="180">
              <polygon class="fil0" points="24718,168883 355741,168883 379987,24192 1,0 "/>
              <text text-anchor="middle" x="95" y="35" style="text-transform: uppercase; fill: #ffffff;">Буквы</text>
              <text text-anchor="middle" x="95" y="65" style="text-transform: uppercase; fill: #ffffff;">
                Световые короба
              </text>
            </svg>
          </div>
        </div>
      </v-flex>
      <v-flex xs6 md2 class="mt-3 mb-3" @click="linkTo('print')">
        <div class="cp-pos-relative">
          <div class="cp-tile">
            <div class="cp-tile-img text-xs-center pa-2">
              <div
                class="tile-img"
                style="background: url('/img/panels/tile/shirka.png'); background-size: cover; background-position-y: 100%;">
              </div>
            </div>
            <div class="cp-tile-text text-xs-center">
              <nuxt-link to="/service/outdoor" class="white--text" title="Широкоформатная печать">Широкоформатная
                печать
              </nuxt-link>
            </div>
            <svg class="polytext" height="80" width="180">
              <polygon class="fil0" points="24718,168883 355741,168883 379987,24192 1,0 "/>
              <text text-anchor="middle" x="95" y="35" style="text-transform: uppercase; fill: #ffffff;">Баннеры</text>
              <text text-anchor="middle" x="95" y="65" style="text-transform: uppercase; fill: #ffffff;">
                Самоклейка
              </text>
            </svg>
          </div>
        </div>
      </v-flex>
      <v-flex xs6 md2 class="mt-3 mb-3" @click="linkTo('suvenir')">
        <div class="cp-pos-relative">
          <div class="cp-tile">
            <div class="cp-tile-img text-xs-center pa-2">
              <div
                class="tile-img"
                style="background: url('/img/panels/tile/suvenirka.png'); background-size: cover; background-position-y: 100%;">
              </div>
            </div>
            <div class="cp-tile-text text-xs-center">
              <nuxt-link to="/service/outdoor" class="white--text" title="Сувенирная продукция">Сувенирная продукция
              </nuxt-link>
            </div>
            <svg class="polytext" height="80" width="180">
              <polygon class="fil0" points="24718,168883 355741,168883 379987,24192 1,0 "/>
              <text text-anchor="middle" x="95" y="35" style="text-transform: uppercase; fill: #ffffff;">Кружки</text>
              <text text-anchor="middle" x="95" y="65" style="text-transform: uppercase; fill: #ffffff;">
                Футболки
              </text>
            </svg>
          </div>
        </div>
      </v-flex>
      <v-flex xs6 md2 class="mt-3 mb-3" @click="linkTo('polygraphy')">
        <div class="cp-pos-relative">
          <div class="cp-tile">
            <div class="cp-tile-img text-xs-center pa-2">
              <div
                class="tile-img"
                style="background: url('/img/panels/tile/poligrafia.png'); background-size: cover; background-position-y: 100%;">
              </div>
            </div>
            <div class="cp-tile-text text-xs-center">
              <nuxt-link to="/service/outdoor" class="white--text" title="Полиграфия">Полиграфия</nuxt-link>
            </div>
            <svg class="polytext" height="80" width="180">
              <polygon class="fil0" points="24718,168883 355741,168883 379987,24192 1,0 "/>
              <text text-anchor="middle" x="95" y="35" style="text-transform: uppercase; fill: #ffffff;">Визитки</text>
              <text text-anchor="middle" x="95" y="65" style="text-transform: uppercase; fill: #ffffff;">
                Буклеты, листовки
              </text>
            </svg>
          </div>
        </div>
      </v-flex>
      <v-flex xs6 md2 class="mt-3 mb-3" @click="linkTo('design')">
        <div class="cp-pos-relative">
          <div class="cp-tile">
            <div class="cp-tile-img text-xs-center pa-2">
              <div
                class="tile-img"
                style="background: url('/img/panels/tile/design.png'); background-size: cover; background-position-y: 100%;">
              </div>
            </div>
            <div class="cp-tile-text text-xs-center">
              <nuxt-link to="/service/outdoor" class="white--text" title="Дизайн">Дизайн</nuxt-link>
            </div>
            <svg class="polytext" height="80" width="180">
              <polygon class="fil0" points="24718,168883 355741,168883 379987,24192 1,0 "/>
              <text text-anchor="middle" x="95" y="35" style="text-transform: uppercase; fill: #ffffff;">Web</text>
              <text text-anchor="middle" x="95" y="65" style="text-transform: uppercase; fill: #ffffff;">
                Фирменный стиль
              </text>
            </svg>
          </div>
        </div>
      </v-flex>
      <v-flex xs6 md2 class="mt-3 mb-3" @click="linkTo('web')">
        <div class="cp-pos-relative">
          <div class="cp-tile">
            <div class="cp-tile-img text-xs-center pa-2">
              <div
                class="tile-img"
                style="background: url('/img/panels/tile/web.png'); background-size: cover; background-position-y: 100%;">
              </div>
            </div>
            <div class="cp-tile-text text-xs-center">
              <nuxt-link to="/service/outdoor" class="white--text" title="Разработка сайтов">Разработка сайтов
              </nuxt-link>
            </div>
            <svg class="polytext" height="80" width="180">
              <polygon class="fil0" points="24718,168883 355741,168883 379987,24192 1,0 "/>
              <text text-anchor="middle" x="95" y="35" style="text-transform: uppercase; fill: #ffffff;">Сайты визитки
              </text>
              <text text-anchor="middle" x="95" y="65" style="text-transform: uppercase; fill: #ffffff;">
                Интернет магазины
              </text>
            </svg>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { TweenLite, Power1 } from 'gsap'

  export default {
    name: 'corona-link',
    methods: {
      linkTo (link) {
        this.$router.push(`/service/${link}/`)
      }
    },
    mounted () {
      const tiles = document.querySelectorAll('.cp-tile')
      for (let tile of tiles) {
        tile.onmouseover = function (event) {
          TweenLite.to(tile, 0.2, {height: 240, backgroundColor: '#0b4e7a', ease: Power1.easeOut})
          tile.querySelector('.tile-img').style.backgroundPositionY = '0%'
          tile.querySelector('.cp-tile-text').style.color = '#0091ce'
          tile.querySelector('.polytext').style.display = 'block'
          TweenLite.to(tile.querySelector('.tile-img'), 0.5, {y: -50, ease: Power1.easeOut})
          TweenLite.to(tile.querySelector('.cp-tile-text'), 0.5, {y: -50, ease: Power1.easeOut})
          TweenLite.to(tile.querySelector('.polytext'), 0.5, {y: -20, ease: Power1.easeOut})
        }

        tile.onmouseout = function (event) {
          TweenLite.to(tile, 0.2, {height: 210, backgroundColor: '#0091ce', ease: Power1.easeOut})
          tile.querySelector('.tile-img').style.backgroundPositionY = '100%'
          tile.querySelector('.cp-tile-text').style.color = 'white'
          tile.querySelector('.polytext').style.display = 'none'
          TweenLite.to(tile.querySelector('.polytext'), 0.5, {y: 0, ease: Power1.easeOut})
          TweenLite.to(tile.querySelector('.tile-img'), 0.5, {y: 0, ease: Power1.easeOut})
          TweenLite.to(tile.querySelector('.cp-tile-text'), 0.5, {y: 0, ease: Power1.easeOut})
        }
      }
    }
  }
</script>

<style scoped>
  .cp-tile {
    background: #0091ce;
    height: 210px;
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  .cp-pos-relative {
    position: relative;
    min-height: 200px;
    cursor: pointer;
  }

  .cp-tile-img {
    position: relative;
    min-height: 154px;
  }

  .cp-tile-img > .tile-img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }

  .cp-tile-text {
    color: #ffffff;
    text-transform: uppercase;
  }

  .polytext {
    display: none;
    margin: 0 auto;
  }

  .fil0 {
    width: 180px;
    fill: #0091ce;
  }

  a {
    text-decoration: none;
  }
</style>
