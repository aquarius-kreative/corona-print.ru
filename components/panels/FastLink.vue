<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap justify-center>
      <v-flex xs6 md1 class="text-xs-center">
        <router-link to="/service/outdoor/" class="cp-sbtn">Реклама</router-link>
      </v-flex>
      <v-flex xs6 md1 class="text-xs-center">
        <router-link to="/service/print/" class="cp-sbtn">Печать</router-link>
      </v-flex>
      <v-flex xs6 md1 class="text-xs-center">
        <router-link to="/service/suvenir/" class="cp-sbtn">Сувенирка</router-link>
      </v-flex>
      <v-flex xs6 md1 class="text-xs-center">
        <router-link to="/service/polygraphy/" class="cp-sbtn">Полиграфия</router-link>
      </v-flex>
      <v-flex xs6 md1 class="text-xs-center">
        <router-link to="/service/design/" class="cp-sbtn">Дизайн</router-link>
      </v-flex>
      <v-flex xs6 md1 class="text-xs-center">
        <router-link to="/service/web/" class="cp-sbtn">Web</router-link>
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
  a.cp-sbtn {
    border: none;
    background: transparent;
    padding: 0 24px;
    font-size: 16px;
    line-height: 52px;
    font-family: 'Open Sans Condensed', sans-serif;
    position: relative;
    color: #3E4651;
    cursor: pointer;
    letter-spacing: 0.5px;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-decoration: none;
  }

  a.cp-sbtn:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 48px;
    background: transparent;
    border: 2px solid #4AB9F2;
    z-index: -1;
    border-radius: 5px;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  a.cp-sbtn:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #fafafa;
    height: 30px;
    width: 80%;
    z-index: -1;
    -webkit-transition: 0.3s linear;
    transition: 0.3s linear;
  }

  a.cp-sbtn:hover:after {
    opacity: 0;
    background: #4AB9F2;
  }

  a.cp-sbtn:hover {
    color: #fafafa;
  }

  a.cp-sbtn:hover:before {
    width: 100%;
    background: #4AB9F2;
  }

  a.cp-sbtn.nuxt-link-active:after {
    opacity: 0;
    background: #4AB9F2;
  }

  a.cp-sbtn.nuxt-link-active {
    color: #fafafa;
  }

  a.cp-sbtn.nuxt-link-active:before {
    width: 100%;
    background: #4AB9F2;
  }

</style>
