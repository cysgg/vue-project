<template>
  <div class="top_focus">
    <div class="bg_img">
      <img v-lazy="travelNoteInfo.focuImg" alt="">
    </div>
    <div class="title_wrap">
      <div class="title_bg"></div>
      <div class="wrap_info">
        <div class="vi_con">
          <h1 class="headtext">{{travelNoteInfo.title}}</h1>
        </div>
      </div>
    </div>
    <!-- {{travelNoteInfo}} -->
  </div>
</template>

<script>
export default {
  name: 'topFocus',
  inject: {
    travelNoteInfo: {
      default: null
    }
  }
}
</script>

<style scoped lang='stylus'>
.top_focus
  position relative
  height calc(100vw/2.7)
  .bg_img
    z-index 1
    width 100%
    height 100%
    position absolute
    left 0
    top 0
    overflow hidden
    img
      position absolute
      width 100%
      height 100%
  .title_wrap
    .title_bg
      position absolute
      left 0
      right 0
      bottom 0
      z-index 1
      opacity .5
      height 119px
      background url(../../assets/images/title_bg.png) 0 bottom repeat-x
    .wrap_info
      width 100%
      height 90px
      position absolute
      left 0
      bottom 0
      z-index 15
      .vi_con
        width 830px
        padding 0 0 10px 150px
        margin 0 auto
        position relative
        z-index 2
        color #fff
        h1
          white-space nowrap
          overflow-wrap normal
          line-height 80px
          width 710px
          height 80px
          font-size 26px
          overflow hidden
          font-weight bold
</style>
