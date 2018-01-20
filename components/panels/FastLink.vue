<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap justify-center>
      <v-flex xs6 md1 class="text-xs-center">
        <v-btn outline block to="/service/outdoor/" color="primary">Реклама</v-btn>
      </v-flex>
      <v-flex xs6 md1 class="text-xs-center">
        <v-btn outline block to="/service/print/" color="primary">Печать</v-btn>
      </v-flex>
      <v-flex xs6 md1 class="text-xs-center">
        <v-btn outline block to="/service/suvenir/" color="primary">Сувенирка</v-btn>
      </v-flex>
      <v-flex xs6 md1 class="text-xs-center">
        <v-btn outline block to="/service/polygraphy/" color="primary">Полиграфия</v-btn>
      </v-flex>
      <v-flex xs6 md1 class="text-xs-center">
        <v-btn outline block to="/service/design/" color="primary">Дизайн</v-btn>
      </v-flex>
      <v-flex xs6 md1 class="text-xs-center">
        <v-btn outline block to="/service/web/" color="primary">Web</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'fast-link'
  }
</script>

<style scoped>

</style>
