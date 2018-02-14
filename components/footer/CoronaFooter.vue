<template>
  <footer class="pa-4">
    <v-card flat color="transparent">
      <v-card-media
        contain
        src="/img/logo.svg"
        height="50px"
      >
      </v-card-media>
    </v-card>
    <v-card flat color="mt-3 pa-0 transparent">
      <v-card-text class="white--text text-xs-center">
        {{getYear()}}<br>
        <router-link to="/policy">Политика организации в отношении обработки персональных данных</router-link>
      </v-card-text>
      <v-card-text class="pa-0 mt-4 white--text text-xs-center">
        <!-- Yandex.Metrika informer -->
        <a href="https://metrika.yandex.ru/stat/?id=41544964&amp;from=informer"
           target="_blank" rel="nofollow"><img
          src="https://informer.yandex.ru/informer/41544964/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
          style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика"
          title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
          class="ym-advanced-informer" data-cid="41544964" data-lang="ru"/></a>
        <!-- /Yandex.Metrika informer -->
      </v-card-text>
    </v-card>
  </footer>
</template>

<script>
  export default {
    name: 'corona-footer',
    methods: {
      getYear () {
        const year = new Date()
        return year.getFullYear().toString() + ' г.'
      }
    }
  }
</script>

<style scoped>
  footer {
    background: #0f2d41;
  }
</style>
