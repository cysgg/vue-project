<template>
  <div class="show-slider">
    <ul class="show-image">
      <li class="first"
        v-for="(item, index) in picList"
        :key="index"
        :class="index === currIndex ? 'show' : 'hide'"
      >
        <router-link tag="a" class="show-pic" to="">
          <img :src="item.imgUrl" alt="">
        </router-link>
        <router-link tag="a" class="show-title dark" to="">
          <div class="date">
            <span class="day">{{item.time | formatDay}}</span>
            /{{item.time | formatMonAndYear}}
          </div>
          <h3>{{item.title}}</h3>
        </router-link>
        <p class="show-info">
          图片来自于<font color="#ff9900">{{item.info.address}}</font>，此目的地共收藏了<font color="#ff9900">{{item.info.imgsNum}}</font>张<font color="#ff9900">{{item.info.address}}</font>图片。本片由<font color="#ff9900">{{item.info.author}}</font>荣誉出品！
        </p>
      </li>
    </ul>
    <ul class="show-nav">
      <li
        v-for="(item, index) in picList"
        :key="index"
        @click="selectImg(index)"
        :class="{'active':currIndex === index}"
      >
        <router-link to="" tag="a">
          <img :src="item.smallImg" height="62" width="110" alt="">
          <span></span>
        </router-link>
      </li>
    </ul>
    <router-link to="/llzm" tag="a" class="show-more">
      历历在目
    </router-link>
  </div>
</template>

<script>
import { formatDay, formatMonAndYear } from '@/utils/filter'
export default {
  name: 'picSlider',
  props: {
    picList: {
      type: Array,
      validator (list) {
        return ['smallImg', 'imgUrl', 'info', 'title', 'time'].every(v => list.every(l => Object.getOwnPropertyNames(l).includes(v)))
      }
    }
  },
  data () {
    return {
      currIndex: 0
    }
  },
  methods: {
    selectImg (index) {
      this.currIndex = index
    },
    sliderTimer () {
      this.currIndex = (this.currIndex + 1) % this.picList.length
    }
  },
  filters: {
    formatDay,
    formatMonAndYear
  },
  mounted () {
    setInterval(this.sliderTimer, 10000)
  }
}
</script>

<style scoped lang="stylus">
@import '~style/common.styl'
.show-slider
  position relative
  overflow hidden
  background-color #f1f4f5
  height calc(100vw / 3)
  min-width 1200px
  .show-image
    position absolute
    left 0
    top 0
    bottom 0
    width 100%
    height 100%
    text-align center
    z-index 2
    .first
      height 100%
      width 100%
      position absolute
      top 0
      left 0
      transition opacity .8s ease
      &.show
        opacity 1
      &.hide
        opacity 0
      .show-pic
        display block
        height 100%
        img
          width 100%
          margin 0
    .show-title
      position absolute
      top 15px
      font-size 20px
      left 50%
      margin-left -500px
      color #fff
      text-align left
      width 1000px
      h3
        font-size 20px
        font-weight normal
      .date
        font-size 20px
        position relative
        width 180px
        overflow hidden
        line-height 34px
        .day
          font-size 30px
    .show-info
      position absolute
      left 50%
      bottom 20px
      min-width 630px
      font-size 14px
      color #fff
      text-shadow 1px 1px 0 rgba(0, 0, 0, .4)
      text-align left
      white-space nowrap
      margin-left -269px
      font
        cursor pointer
  .show-nav
    position absolute
    right 40px
    top 45%
    margin-top -166px
    width 110px
    z-index 2
    li
      height 62px
      margin-bottom 6px
      position relative
      overflow hidden
      &:first-child
        border-radius 0 5px 0 0
      &.active
        span
          content ''
          position absolute
          left 0
          top 0
          right 0
          bottom 0
          border 2px solid $theme_color
          width 106px
          height 58px
          overflow hidden
  .show-more
    position absolute
    z-index 2
    right 40px
    top 50%
    width 110px
    height 35px
    margin-top 160px
    background-image url(../../assets/images/mfw_logo2.png)
    background-position -60px -50px
    line-height 200px
    overflow hidden
</style>
