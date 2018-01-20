<template>
  <div class="pa0 hidden-lg-and-up">
    <v-navigation-drawer light fixed clipped enable-resize-watcher app v-model="drawer"
                         class="white">
      <v-list class="pa-1 mt-5" dense>
        <v-divider dark></v-divider>
        <v-list-tile to="/" exact>
          <v-list-tile-action>
            <v-icon>business</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Агентство</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/service">
          <v-list-tile-action>
            <v-icon>dvr</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Услуги</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/portfolio">
          <v-list-tile-action>
            <v-icon>collections</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Портфолио</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/contacts">
          <v-list-tile-action>
            <v-icon>place</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Контакты</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/feedback">
          <v-list-tile-action>
            <v-icon>tag_faces</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Онлайн-заявка</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed class="accent mobiletoolbar">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-card flat class="pa-1" color="transparent" height="100%" style="width: 150px;">
          <v-card-media src="/img/logo.svg" contain height="100%">
          </v-card-media>
        </v-card>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <a href="tel:+79180005816" class="ma-0">
        <v-btn icon class="white--text">
          <v-icon>phone</v-icon>
        </v-btn>
      </a>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'mobile-toolbar',
    data () {
      return {
        drawer: false
      }
    }
  }
</script>

<style scoped>
  .mobiletoolbar {
    z-index: 6;
  }

  a {
    text-decoration: none;
  }
</style>
