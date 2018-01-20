<template>
  <v-app>
    <desktop-toolbar/>
    <mobile-toolbar/>
    <nuxt/>
    <corona-footer/>
  </v-app>
</template>

<script>
  import DesktopToolbar from '~/components/nav/DesktopToolbar'
  import MobileToolbar from '~/components/nav/MobileToolbar'
  import CoronaFooter from '~/components/footer/CoronaFooter'

  export default {
    components: {
      DesktopToolbar,
      MobileToolbar,
      CoronaFooter
    }
  }
</script>

<style>
</style>
