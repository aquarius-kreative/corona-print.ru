<template>
  <v-container fluid class="pa-0">
    <v-layout class="my-1">
      <v-flex xs12>
        <div class="h1-divider">
          <div class="divtext">
            <h1>{{service.name}}</h1>
            <span></span>
          </div>
        </div>
        <fast-link></fast-link>
        <v-card flat v-if="service.image">
          <v-card-media
            :src="service.image"
            height="500px"
          >
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat color="transparent">
            <v-card-text class="text-xs-center subheading">
              <p v-html="addBr(service.content)"></p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <product-view v-for="(product, i) in service.products" v-if="service.products" :key="i" :product="product"/>
    </v-container>
    <fast-link></fast-link>
  </v-container>
</template>

<script>
  import FastLink from '~/components/panels/FastLink'
  import ProductView from '~/components/content/ProductView'

  export default {
    data () {
      return {
        service: ''
      }
    },
    async asyncData ({app, params}) {
      let {data} = await app.$axios.get('/services/')
      let service = data.find(elm => elm.tile === params.page)
      return {'service': service}
    },
    head () {
      return {
        title: this.service.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.service.content
          }
        ]
      }
    },
    components: {
      FastLink,
      ProductView
    },
    methods: {
      addBr (text) {
        return text.replace(/(?:\r\n|\r|\n)/g, '<br />')
      }
    },
    mounted () {
      console.dir(this.service)
    }
  }
</script>

<style>

</style>
