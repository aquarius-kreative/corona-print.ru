<template>
  <v-container fluid class="pa-0 portfolio">
    <v-layout class="my-1">
      <v-flex xs12>
        <div class="h1-divider">
          <div class="divtext">
            <h1>Портфолио</h1>
            <span></span>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-container fluid grid-list-md text-xs-center>
      <v-layout row wrap justify-center>
        <v-flex xs6 sm4 md3 lg2 v-for="(image, index) in items" :key="index">
          <portfolio-slider :image="image"/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  import PortfolioSlider from '~/components/images/PortfolioSlider'

  export default {
    head: {
      title: 'Портфолио',
      meta: [
        {hid: 'description', name: 'description', content: 'Портфолио рекламного агентства КОРОНА PRINT'}
      ]
    },
    data () {
      return {}
    },
    asyncData ({app, error}) {
      return app.$axios.$get('/api/portfolios/')
        .then(res => {
          return {items: res.data.sort((a, b) => a.id < b.id)}
        })
        .catch(err => error({statusCode: err.statusCode, message: 'Произошла ошибка'}))
    },
    components: {
      PortfolioSlider
    }
  }
</script>

<style>

</style>
