<template>
  <div id="app" :class="{'body-mt': !$route.meta.headerOpacity}">
    <!-- 头部 -->
    <tabBar></tabBar>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <!-- 底部 -->
    <footerBar></footerBar>
  </div>
</template>

<script>
import tabBar from '@/components/header/tab_bar'
import footerBar from 'components/footer/footerBar'
export default {
  name: 'App',
  components: {
    tabBar,
    footerBar
  }
}
</script>

<style lang="stylus">
body
  min-width 1140px
  overflow-x hidden
  margin 0 auto
  user-select none
  font-size 12px
  color #666
  font-family Arial,"Lucida Grande","Microsoft Yahei","Hiragino Sans GB","Hiragino Sans GB W3",SimSun,"PingFang SC",STHeiti
.body-mt
  margin-top 58px
  overflow hidden
.slideRight-enter
  transform translateX(100%)
  position absolute
.slideRight-leave-to
  transform translateX(-100%)
  position absolute
.slideLeft-enter
  transform translateX(-100%)
  position absolute
.slideLeft-leave-to
  transform translateX(100%)
  position absolute
.slideRight-enter-active,
.slideRight-leave-active,
.slideLeft-enter-active,
.slideLeft-leave-active
  transition: transform .5s
.clear
  clear both
  display block
  height 0
  font-size 0
  line-height 0
  overflow hidden
.row
  padding 40px 0
  width 1000px
  margin 0 auto
  overflow hidden
  .r-title
    margin-bottom 35px
    text-align center
    font-size 16px
    line-height 24px
    h2
      margin-bottom 8px
      font-size 26px
      font-weight normal
      color #333
      line-height 26px
</style>
