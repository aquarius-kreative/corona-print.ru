<template>
  <v-layout row wrap class="mt-4" style="border-top: 1px solid #0091ce;">
    <v-flex xs12 md7>
      <v-card flat color="transparent">
        <v-card-title>
          <h3>{{ product.name }}</h3>
        </v-card-title>
        <v-card-text class="subheading pa-4">
          <p v-html="addBr(product.content)"></p>
          <v-layout row wrap v-if="product.price">
            <v-flex xs5 md2 class="pa-2">
              <span class="primary headline white--text pa-1">Цена:</span>
            </v-flex>
            <v-flex xs7 md10 class="pa-2">
              <span class="headline pa-1">{{product.price}}</span>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md5>
      <product-slider :images="product.images" :name="product.name" v-if="product.images.length"/>
    </v-flex>
  </v-layout>
</template>

<script>
  import ProductSlider from '~/components/images/ProductSlider'

  export default {
    name: 'product-view',
    props: ['product'],
    components: {
      ProductSlider
    },
    methods: {
      addBr (text) {
        return text.replace(/(?:\r\n|\r|\n)/g, '<br />')
      }
    }
  }
</script>

<style scoped>

</style>
