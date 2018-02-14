<template>
  <v-app>
    <desktop-toolbar/>
    <mobile-toolbar/>
    <nuxt/>
    <corona-footer/>
    <scroll-top/>
  </v-app>
</template>

<script>
  import DesktopToolbar from '~/components/nav/DesktopToolbar'
  import MobileToolbar from '~/components/nav/MobileToolbar'
  import ScrollTop from '~/components/nav/ScrollTop'
  import CoronaFooter from '~/components/footer/CoronaFooter'

  export default {
    components: {
      DesktopToolbar,
      MobileToolbar,
      CoronaFooter,
      ScrollTop
    }
  }
</script>

<style>
</style>
