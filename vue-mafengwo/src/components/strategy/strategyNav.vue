<template>
  <div class="nav-sticky">
    <div class="btn-box clearfix">
      <div
        class="bar-sar"
        v-for="(item, name) in strategyItemInfo.btnMap"
        :key="name"
      >
        <i :class="name"></i>
        <em>{{item}}</em>
      </div>
    </div>
    <p class="title">攻略目录</p>
  </div>
</template>

<script>
export default {
  name: 'strategyNav',
  inject: {
    strategyItemInfo: {
      default: null
    }
  }
}
</script>

<style scoped lang='stylus'>
.nav-sticky
  position sticky
  top 10px
  .btn-box
    margin-bottom 10px
    .bar-sar
      float left
      display block
      width 68px
      height 70px
      text-align center
      height 70px
      color #333
      i
        display block
        width 25px
        height 24px
        margin 0 auto 10px auto
        background url(../../assets/images/list_sprites01.png) no-repeat
        &.editCount
          background-position 0 0
        &.collectionCount
          background-position -68px 0
        &.shareCount
          background-position -136px 0
        &.likedCOunt
          background url(../../assets/images/icon_support.png) no-repeat
          background-size 100%
      em
        font-style normal
        font-size 16px
        color #333
  .title
    font-size 18px
    padding-bottom 5px
    color #333
    width 275px
    margin 25px 0 10px
</style>
