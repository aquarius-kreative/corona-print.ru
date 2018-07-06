<template>
  <div class="pa-0 my-3 hidden-md-and-down">
    <v-layout row align-center class="cp-header-menu">
      <v-flex md1 xs6>
        <nuxt-link to="/">
          <v-card flat class="pa-3" style="background: #0b4e7a">
            <v-card-media src="/img/logo.svg" style="min-height: 80px" contain>
            </v-card-media>
          </v-card>
        </nuxt-link>
      </v-flex>
      <v-flex md1 class="text-xs-right">
        <v-card flat color="transparent">
          <v-card-text>
            <div class="cp-header-contact">
              <div class="cp-phone">+7 918 000-58-16</div>
              <div class="cp-address">
                <v-icon dark>room</v-icon>
                г. Темрюк
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md3 class="text-xs-right">
        <v-card flat color="transparent">
          <v-card-text>
            <ul class="cp-nav-menu">
              <!--<li class="cp-nav-menu-item">-->
                <!--<nuxt-link to="/feedback" title="Онлайн-заявка">-->
                  <!--<div class="cp-nav-menu-item-text">Аренда щитов</div>-->
                <!--</nuxt-link>-->
              <!--</li>-->
              <li class="cp-nav-menu-item">
                <nuxt-link to="/feedback" title="Онлайн-заявка">
                  <div class="cp-nav-menu-item-text">Онлайн-заявка</div>
                </nuxt-link>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md1 class="text-xs-center hidden-sm-and-down">
        <img src="/img/logo-krug.svg" ref="circlelogo" class="cp-logo-krug" @click.prevent="logoClick">
      </v-flex>
      <v-flex md5 lg5 class="text-xs-center hidden-sm-and-down">
        <v-card flat color="transparent">
          <v-card-text class="text-xs-right">
            <ul class="cp-nav-menu">
              <li class="cp-nav-menu-item">
                <nuxt-link to="/" title="Агентство" exact>
                  <div class="cp-nav-menu-item-text">Агентство</div>
                </nuxt-link>
              </li>
              <li class="cp-nav-menu-item">
                <nuxt-link to="/service" title="Услуги">
                  <div class="cp-nav-menu-item-text">Услуги</div>
                </nuxt-link>
              </li>
              <li class="cp-nav-menu-item">
                <nuxt-link to="/portfolio" title="Портфолио">
                  <div class="cp-nav-menu-item-text">Портфолио</div>
                </nuxt-link>
              </li>
              <li class="cp-nav-menu-item">
                <nuxt-link to="/contacts" title="Контакты">
                  <div class="cp-nav-menu-item-text">Контакты</div>
                </nuxt-link>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex class="text-xs-center align-content-end hidden-md-and-down">
        <a href="tel:+79180005816" class="ma-0">
          <v-icon large class="white--text">phone</v-icon>
        </a>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import { TweenLite, Power1 } from 'gsap'

  export default {
    name: 'desktop-toolbar',
    methods: {
      async logoClick () {
        let elem = this.$refs.circlelogo
        await TweenLite.to(elem, 0.5, {rotation: 360, ease: Power1.easeOut})
        TweenLite.set(elem, {rotation: 0})
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .cp-header-menu {
    min-height: 50px;
    background: linear-gradient(to right, #00aded, #0b458f);
  }

  .cp-logo-krug {
    position: absolute;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 0;
    border-radius: 50%;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.55);
    z-index: 2;
  }

  .cp-nav-menu {
    list-style-type: none;
    vertical-align: middle;
    display: inline-block;
    position: relative;
    line-height: 80px;
  }

  .cp-nav-menu-item {
    display: inline-block;
    text-transform: uppercase;
    font-size: 10pt;
    vertical-align: middle;
    -webkit-transform: rotateY(0);
    -moz-transform: rotateY(0);
    -ms-transform: rotateY(0);
    -o-transform: rotateY(0);
    transform: rotateY(0);
  }

  .cp-nav-menu-item a {
    cursor: pointer;
    color: #ffffff !important;
    -webkit-transform: skew(-35deg, 0);
    -moz-transform: skew(-35deg, 0);
    -ms-transform: skew(-35deg, 0);
    -o-transform: skew(-35deg, 0);
    transform: skew(-35deg, 0);
    box-shadow: 0px 0px 0px rgba(0, 31, 64, 0.1);
    border-right: 1px solid #ffffff;
    border-left: 1px solid #ffffff;
    height: 25px;
    line-height: 25px;
    display: inline-block;
    padding-left: 18px;
    padding-right: 18px;
    margin-right: -1px;
    background: url('/img/menu-item-bg.png');
    background-size: 201% 0%;
    -webkit-transition: -webkit-transform 100ms, background-position 140ms ease-in, color 140ms ease-in, height 60ms ease-in-out, line-height 60ms ease-in-out, text-shadow 0ms;
    -moz-transition: -moz-transform 100ms, background-position 140ms ease-in, color 140ms ease-in, height 60ms ease-in-out, line-height 60ms ease-in-out, text-shadow 0ms;
    -o-transition: -o-transform 100ms, background-position 140ms ease-in, color 140ms ease-in, height 60ms ease-in-out, line-height 60ms ease-in-out, text-shadow 0ms;
    transition: transform 100ms, background-position 140ms ease-in, color 140ms ease-in, height 60ms ease-in-out, line-height 60ms ease-in-out, text-shadow 0ms;
    vertical-align: middle;
  }

  .cp-nav-menu-item a:hover {
    border-right: 1px solid transparent;
    overflow: hidden;
    background-position: 100% 0;
    color: #0b4e7a !important;
    box-shadow: 1px 2px 5px rgba(0, 31, 64, 0.68);
    height: 45px;
    line-height: 45px;
    background-size: 201% 103%;
    -webkit-transition: -webkit-transform 100ms, background-position 90ms ease-out, color 90ms ease-out, height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, line-height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, text-shadow 50ms;
    -webkit-transition-delay: 0s, 0s, 0s, 0s, 0s, 100ms;
    -moz-transition: -moz-transform 100ms, background-position 90ms ease-out, color 90ms ease-out, height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, line-height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, text-shadow 50ms 100ms;
    -o-transition: -o-transform 100ms, background-position 90ms ease-out, color 90ms ease-out, height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, line-height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, text-shadow 50ms 100ms;
    transition: transform 100ms, background-position 90ms ease-out, color 90ms ease-out, height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, line-height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, text-shadow 50ms 100ms;
  }

  .cp-nav-menu-item a.nuxt-link-active {
    border-right: 1px solid transparent;
    overflow: hidden;
    background-position: 100% 0;
    color: #0b4e7a !important;
    box-shadow: 1px 2px 5px rgba(0, 31, 64, 0.68);
    height: 45px;
    background-size: 201% 103%;
    line-height: 45px;
    -webkit-transition: -webkit-transform 100ms, background-position 90ms ease-out, color 90ms ease-out, height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, line-height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, text-shadow 50ms;
    -webkit-transition-delay: 0s, 0s, 0s, 0s, 0s, 100ms;
    -moz-transition: -moz-transform 100ms, background-position 90ms ease-out, color 90ms ease-out, height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, line-height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, text-shadow 50ms 100ms;
    -o-transition: -o-transform 100ms, background-position 90ms ease-out, color 90ms ease-out, height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, line-height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, text-shadow 50ms 100ms;
    transition: transform 100ms, background-position 90ms ease-out, color 90ms ease-out, height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, line-height 150ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 90ms, text-shadow 50ms 100ms;
  }

  .cp-nav-menu-item-text {
    -webkit-transform: skew(35deg, 0);
    -moz-transform: skew(35deg, 0);
    -ms-transform: skew(35deg, 0);
    -o-transform: skew(35deg, 0);
    transform: skew(35deg, 0);
    display: inline-block;
  }

  .cp-header-contact {
    position: absolute;
    width: 200px;
    bottom: 70px;
  }

  .cp-phone {
    position: absolute;
    color: #ffffff;
    top: 20px;
    left: 10px;
    font-size: 20px;
  }

  .cp-address {
    position: absolute;
    color: #ffffff;
    top: 60px;
    left: 30px;
  }

  a {
    text-decoration: none;
  }

</style>
