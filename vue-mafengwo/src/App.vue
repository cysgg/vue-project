<template>
  <div id="app" class="app_body">
    <tabBar></tabBar>
    <router-view/>
    <footerBar></footerBar>
  </div>
</template>

<script>
import tabBar from '@/components/header/tab_bar'
import footerBar from 'components/footer/footerBar'
export default {
  name: 'App',
  components: {
    'tabBar': tabBar,
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
</style>
