<template>
  <div class="tabber">
    <div class="header-wrap">
      <div class="head-logo">
        <router-link class="mfw-logo" to="/" tag="a"></router-link>
      </div>
      <ul class="head-nav">
        <li
          class="head-nav-li"
          :class="{'head-nav-li-active': $route.path === item.path}"
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
  computed: {
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
  .header-wrap
    width 1180px
    height 68px
    margin 0 auto
    position relative
    z-index 2
    background-color #ffffff
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
            color #ff9d00
            border-bottom 3px solid #ff9d00
          .mfwzx-logo
            width 75px
            height 58px
            background url('../../assets/images/mfwzx.png') no-repeat center
            background-size 75px 30px
      .head-nav-li-active
        a
          background-color #ff9d00
          color #fff
          &:hover
            color #fff
          .mfwzx-logo
            width 75px
            height 58px
            background url('../../assets/images/mfwzx_active.png') no-repeat center
            background-size 75px 30px
</style>
