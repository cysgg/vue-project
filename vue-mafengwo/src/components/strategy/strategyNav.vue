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
    <div class="section_wrap clearfix">
      <div class="sideL_svg">
        <lineload
          :svgWidth="30"
          :svgHeight="svgHeight"
          :endNum="endNum"
          :nowNum="nowNum"
          :strokeWidth="2"
        />
      </div>
      <div class="sideR_con" ref="sidecon">
        <div
          class="section"
          v-for="catalog in strategyItemInfo.catalogList"
          :key="catalog.id"
        >
          <p @click="scrollto(catalog.scrollTop)" :class="{'top': catalog.top}">{{catalog.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { scrollIt } from '@/utils/scrollIt'
import lineload from 'components/common/lineload'
export default {
  name: 'strategyNav',
  components: {
    lineload
  },
  inject: {
    strategyItemInfo: {
      default: null
    }
  },
  data () {
    return {
      endNum: 0,
      nowNum: 0,
      svgHeight: 0
    }
  },
  methods: {
    scrollListen (scrollTop, clientHeight, scrollHeight) {
      this.endNum = scrollHeight - clientHeight
      this.nowNum = scrollTop
    },
    scrollto (top) {
      scrollIt(top)
    }
  },
  watch: {
    strategyItemInfo () {
      this.$nextTick(() => {
        this.svgHeight = this.$refs.sidecon.scrollHeight
      })
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
      cursor pointer
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
  .section_wrap
    height 710px
    max-height 776px
    overflow-y hidden
    padding-left 5px
    position relative
    .sideL_svg
      width 35px
      float left
    .sideR_con
      width 210px
      float left
      .section
        position relative
        margin-bottom 20px
        p
          font-size 14px
          color #666
          cursor pointer
          &:hover
            color $theme_color
        .top
          color #333
          font-size 16px
</style>
