<template>
  <div>
    <v-btn fab dark fixed bottom right small color="primary" @click="$vuetify.goTo('.cp-header-menu', {
          duration: 800,
          offset: 0,
          easing: 'easeInOutCubic'
        })">
      <v-icon dark>keyboard_arrow_up</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'scroll-top'
  }
</script>

<style scoped>

</style>
