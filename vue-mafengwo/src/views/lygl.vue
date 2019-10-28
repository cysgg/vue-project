<template>
  <div class="wrapper">
    <div class="focus">
      <!-- 攻略导航 -->
      <mddNav class="mdd_nav"></mddNav>
      <!-- 攻略轮播 -->
      <glSlider class="slide"></glSlider>
    </div>
    <div class="gonglve_wrap">
      <tjgl class="cont-main"></tjgl>
    </div>
  </div>
</template>

<script>
import mddNav from 'components/lygl/mddNav'
import glSlider from 'components/lygl/glSlider'
import tjgl from 'components/lygl/tjgl'
export default {
  name: 'lygl',
  components: {
    mddNav,
    glSlider,
    tjgl
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  width 1000px
  margin 15px auto 0
  .focus
    height 343px
    margin 10px 0 15px
    .mdd_nav
      float left
      width 260px
    .slide
      float right
      width 700px
      height 340px
      overflow hidden
  .gonglve_wrap
    margin-top 15px
    padding-bottom 20px
</style>
