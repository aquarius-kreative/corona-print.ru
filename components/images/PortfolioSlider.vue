<template>
  <v-dialog v-model="dialog" fullscreen :overlay=true style="width: 100%">
    <v-card slot="activator" xs12 class="slider-activator">
      <v-card-media
        :src="image.pic"
        height="200px"
        cover
      >
      </v-card-media>
    </v-card>
    <v-card class="white">
      <v-toolbar dense dark fixed style="background: rgba(0,0,0,0.6)">
        <v-toolbar-title>{{image.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.native="dialog = false" dark>
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-carousel hide-delimiters :cycle="false" class="black" style="height: 100vh">
        <v-carousel-item v-for="(content, index) in image.images" v-bind:src="content.file"
                         :key="index"></v-carousel-item>
      </v-carousel>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'portfolio-slider',
    props: ['image'],
    data () {
      return {
        dialog: false
      }
    }
  }
</script>

<style scoped>
  .carousel {
    height: 100vh;
  }

  .slider-activator {
    cursor: pointer;
  }
</style>
