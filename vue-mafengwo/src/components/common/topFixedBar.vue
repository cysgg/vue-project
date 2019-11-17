<template>
  <div class="fixed-bar">
    <div class="bar-main">
      <div class="bread-nav">
        <router-link class="circle_bar" :to="{name: 'home'}">
          <svgIcon
            :svgWidth="svgWidth"
            :svgHeight="svgHeight"
            :svgPosition="svgPosition"
            defaultColor="#e2e2e2"
            loadingColor="#ff9d00"
            :endNum="endNum"
            :nowNum="nowNum"
          />
        </router-link>
        <div class="bread-con">
          <router-link to="">
            {{topBarTitle}}
          </router-link>
          /
          <router-link to="">
            {{topBarText}}
          </router-link>
        </div>
      </div>
    </div>
    <div class="bar_login">
      <loginArea></loginArea>
    </div>
  </div>
</template>

<script>
import svgIcon from 'components/common/svgIcon'
import loginArea from 'components/header/loginArea'
export default {
  name: 'topFixedBar',
  components: {
    loginArea,
    svgIcon
  },
  data () {
    return {
      svgWidth: 60,
      svgHeight: 60,
      svgPosition: {
        x: 32,
        y: 28,
        r: 17
      }
    }
  },
  props: {
    endNum: {
      type: Number
    },
    nowNum: {
      type: Number
    },
    topBarTitle: {
      type: String
    },
    topBarText: {
      type: String
    }
  }
}
</script>

<style scoped lang='stylus'>
.fixed-bar
  width 1000px
  margin 0 auto
  position relative
  .bar-main
    width 500px
    float left
    padding 3px 10px 4px 0
    .bread-nav
      width 570px
      height 55px
      float left
      position relative
      .circle_bar
        float left
        &:before
          content ''
          display block
          position absolute
          z-index -1
          top 10px
          left 10px
          width 36px
          height 36px
          background url(../../assets/images/nn_sprite_v25.png) no-repeat -264px -266px
      .bread-con
        float left
        font-size 14px
        width 500px
        padding-top 20px
        margin-left 9px
        color #666
  .bar_login
    position relative
    width 420px
    float right
</style>
