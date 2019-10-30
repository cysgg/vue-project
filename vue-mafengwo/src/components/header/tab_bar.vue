<template>
  <div class="tabber" :class="{'headerOpacity': $route.meta.headerOpacity}">
    <div class="header-wrap">
      <div class="head-logo">
        <router-link class="mfw-logo" to="/" tag="a"></router-link>
      </div>
      <ul class="head-nav">
        <li
          class="head-nav-li"
          :class="{'head-nav-li-active': $route.path.indexOf(item.path) > -1}"
          v-for="(item ,index) in navList"
          :key="index"
        >
          <router-link :to="item.path" tag="a">{{item.value}}</router-link>
        </li>
        <li
          class="head-nav-li"
          :class="{'head-nav-li-active': $route.path === '/group'}"
        >
          <router-link to="group" tag="a">
            <div class="mfwzx-logo"></div>
          </router-link>
        </li>
      </ul>
      <head-search @search="search"></head-search>
      <login-area></login-area>
    </div>
    <div v-if="!$route.meta.headerOpacity" class="shadow"></div>
  </div>
</template>

<script>
import api from '@/api/index'
import headSearch from './headSearch.vue'
import loginArea from './loginArea.vue'
export default {
  name: 'tabBar',
  data () {
    return {
      navList: []
    }
  },
  components: {
    headSearch,
    loginArea
  },
  methods: {
    search (key) {
      console.log(key)
    }
  },
  created () {
    api.getHeaderInfo().then(res => {
      console.log(res)
      this.navList = res.tablist
    })
  }
}
</script>

<style scoped lang="stylus">
.tabber
  position absolute
  width 100%
  left 0
  top 0
  right 0
  background-color #fff
  z-index 111
  .shadow
    position absolute
    left 0
    bottom -2px
    width 100%
    height 2px
    border-top 1px solid #d6d6d6
    background-color rgba(0, 0, 0, .06)
    overflow hidden
  .header-wrap
    width 1180px
    height 58px
    margin 0 auto
    position relative
    z-index 2
    .head-logo
      position relative
      padding 13px 0
      height 32px
      width 136px
      float left
      .mfw-logo
        height 33px
        width 120px
        background url('../../assets/images/logo1.png') no-repeat 0 0
        display block
        position relative
    .head-nav
      line-height 58px
      font-size 14px
      float left
      display inline
      padding 0 10px 0 25px
      color #333
      .head-nav-li
        float left
        position relative
        a
          display inline-block
          padding 0 16px
          color #333
          vertical-align top
          overflow hidden
          &:hover
            height 55px
            color $theme_color
            border-bottom 3px solid $theme_color
          .mfwzx-logo
            width 75px
            height 58px
            background url('../../assets/images/mfwzx.png') no-repeat center
            background-size 75px 30px
      .head-nav-li-active
        a
          background-color $theme_color
          color #fff !important
          &:hover
            color #333
          .mfwzx-logo
            width 75px
            height 58px
            background url('../../assets/images/mfwzx_active.png') no-repeat center
            background-size 75px 30px

.headerOpacity
  background none
  .header-wrap
    .head-logo
      .mfw-logo
        background url('../../assets/images/logo2.png') no-repeat 0 0
    .head-nav
      color #fff
      .head-nav-li
        a
          color #fff
          .mfwzx-logo
            background url('../../assets/images/mfwzx_active.png') no-repeat center
            background-size 75px 30px
  &:hover
      background-color #fff
      .header-wrap
        .head-logo
          .mfw-logo
            background url('../../assets/images/logo1.png') no-repeat 0 0
        .head-nav
          color #333
          .head-nav-li
            a
              color #333
              .mfwzx-logo
                background url('../../assets/images/mfwzx.png') no-repeat center
                background-size 75px 30px
</style>
