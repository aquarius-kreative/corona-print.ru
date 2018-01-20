<template>
  <div class="owl-carousel">
    <div>
      <a class="bwhite">
        <img src="/carousel/trec.svg">
      </a>
    </div>
    <div>
      <a class="bwhite">
        <img src="/carousel/stroimonolit.svg">
      </a>
    </div>
    <div>
      <a class="bwhite">
        <img src="/carousel/sk.svg">
      </a>
    </div>
    <div>
      <a class="bwhite">
        <img src="/carousel/ru.svg">
      </a>
    </div>
    <div>
      <a class="bwhite">
        <img src="/carousel/pelican.svg">
      </a>
    </div>
    <div>
      <a class="bwhite">
        <img src="/carousel/mts.svg">
      </a>
    </div>
    <div>
      <a class="bwhite">
        <img src="/carousel/moltrans.svg">
      </a>
    </div>
    <div>
      <a class="bwhite">
        <img src="/carousel/gas.svg">
      </a>
    </div>
    <div>
      <a class="bwhite">
        <img src="/carousel/emex.svg">
      </a>
    </div>
    <div>
      <a class="bwhite">
        <img src="/carousel/drom.svg">
      </a>
    </div>
    <div>
      <a class="bwhite">
        <img src="/carousel/fanagoria.svg">
      </a>
    </div>
    <div>
      <a class="bwhite">
        <img src="/carousel/ural.svg">
      </a>
    </div>
    <div>
      <a class="bwhite">
        <img src="/carousel/GREENBET.svg">
      </a>
    </div>
    <div>
      <a class="bwhite">
        <img src="/carousel/smarty_kids.svg">
      </a>
    </div>
  </div>
</template>

<script>
  if (process.browser) {
    require('owl.carousel')
  }
  export default {
    name: 'home-carousel',
    mounted () {
      if (process.browser) {
        $('.owl-carousel').owlCarousel({
          loop: true,
          nav: false,
          center: true,
          margin: 40,
          autoplay: true,
          autoplayTimeout: 2000,
          responsiveClass: true,
          responsive: {
            0: {
              items: 3
            },
            600: {
              items: 5
            },
            1000: {
              items: 9
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  .owl-item div {
    display: table-cell;
    vertical-align: middle;
  }

  .owl-item div a.bwhite img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  .owl-item div a.bwhite img:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }
</style>
