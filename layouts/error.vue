<template>
  <v-container>
    <v-layout class="my-1">
      <v-flex xs12>
        <div class="h1-divider">
          <div class="divtext">
            <h1>{{error.statusCode}}</h1>
            <span></span>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12 md4>
        <v-card>
          <v-card-text class="text-xs-center">
            <h1 v-if="error.statusCode === 404">Страница не найдена.</h1>
            <h1 v-else>Произошла ошибка</h1>
            <nuxt-link to="/">Главная</nuxt-link>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['error']
  }
</script>
