<template>
  <v-container fluid class="pa-0">
    <div class="header-image">
      <img src="/img/slides/slider1.jpg">
    </div>
    <corona-link/>
    <v-layout class="my-5">
      <v-flex xs12 class="pb-5 mb-5">
        <div class="h1-divider">
          <div class="divtext">
            <h1>Реклама, вывески, баннера, визитки | ТЕМРЮК | КОРОНА PRINT</h1>
            <v-card flat color="transparent" class="mb-5" height="300">
              <v-card-text class="pa-4 subheading">
                <p class="text-xs-center mb-5" style="color: #0091ce">Производство любых видов рекламы в Темрюке. <br>Любая
                  <strong>Наружная реклама</strong> под заказ. Быстро,
                  недорого. Гарантия 100%. <br>Лучшие цены. Стенды. Фасадные вывески. <strong>Объемные буквы</strong>
                  всех видов. <strong>Световые короба.</strong> Свое производство. </p>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <div class="hidden-md-and-up" style="margin: 250px 0px"></div>
    <corona-feature/>
    <v-layout row wrap class="my-4">
      <v-flex xs12 class="pb-5 mb-3">
        <div class="h1-divider">
          <div class="divtext">
            <h3>Наши клиенты</h3>
          </div>
        </div>
        <v-card flat color="transparent">
          <v-card-text class="pa-4 subheading">
            <p class="text-xs-center" style="color: #0091ce">
              За время существования в городе Темрюке рекламного агенства Корона Print <br>
              нам повезло сотрудничать с такими крупными компаниями,<br> как автомобильный портал DROM.ru,
              группа компаний "ЭФКО", компания Rental Units, автозапчасти EMEX,<br> transport & logistics
              MOLTRANS и многими другими.<br> Если Вы у нас ещё не были, то обязательно приходите!
              Будем рады долговременному сотрудничеству!
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <home-carousel/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import CoronaFeature from '~/components/panels/CoronaFeature'
  import CoronaLink from '~/components/panels/CoronaLink'
  import HomeCarousel from '~/components/carousel/HomeCarousel'

  export default {
    head() {
      return {
        title: 'Реклама, вывески, баннера, визитки',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Рекламное агентство Корона PRINT - производство наружной рекламы в Темрюке и Анапе. Печать баннеров Темрюк, вывески, световые буквы, таблички, визитки темрюк, штендер, рекламная плоскость, разработка сайтов.'
          }
        ]
      }
    },
    components: {
      CoronaFeature,
      CoronaLink,
      HomeCarousel
    }
  }
</script>

<style scoped>
  .header-image img {
    width: 100%;
  }
</style>
