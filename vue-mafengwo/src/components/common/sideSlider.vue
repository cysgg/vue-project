<template>
  <div class="side_slider">
    <div class="side_box_title">
      {{sideTitle}}
    </div>
    <div class="slide_box">
      <slider
        @slideToRight="slideRight"
        @slideToLeft="slideLeft"
        :showInfoList="sideList"
        olClass="sideslide-ol"
        >
        <template v-slot:showArea="{currItem}">
          <transition tag="div" :name="slideDec">
            <div :key="currItem.title" class="slide-li">
              <router-link to="">
                <img v-lazy="currItem.img" alt="">
                <div class="bg"></div>
                <span>
                  <i></i>
                  {{currItem.visitingCount}}
                </span>
                <h3>{{currItem.title}}</h3>
              </router-link>
            </div>
          </transition>
        </template>
        <template v-slot:clickArea="{scopeItem}">
          <div class="slide-oi" :class="{'on': scopeItem.currIndex === scopeItem.index}">
          </div>
        </template>
      </slider>
    </div>
  </div>
</template>

<script>
import slider from 'components/common/slider'
export default {
  name: 'sideSlider',
  components: {
    slider
  },
  props: {
    sideList: {
      type: Array
    },
    sideTitle: {
      type: String
    }
  },
  data () {
    return {
      slideDec: 'slideRight'
    }
  },
  methods: {
    slideRight () {
      this.slideDec = 'slideRight'
    },
    slideLeft () {
      this.slideDec = 'slideLeft'
    }
  }
}
</script>

<style scoped lang='stylus'>
.side_slider
  overflow hidden
  margin-bottom 16px
  .side_box_title
    margin-bottom 15px
    font-size 16px
    line-height 1
  .slide_box
    position relative
    overflow hidden
    height 166px
  .slide-li
    width 240px
    position absolute
    height 160px
    overflow hidden
    a
      color #fff
      .bg
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background-color #000
        opacity .2
      span
        position absolute
        left 5px
        top 10%
        font-size 12px
        font-family "Microsoft Yahei"
        i
          display inline-block
          margin-right 5px
          width 21px
          height 16px
          background url(../../assets/images/icon-view-white.png) no-repeat 0 0
          vertical-align middle
      h3
        position absolute
        left 7px
        right 7px
        bottom 5px
        line-height 20px
        font-size 16px
        font-weight bold
  .slide-oi
    float left
    height 4px
    margin-right 1px
    background-color #e5e5e5
    width 79px
    cursor pointer
    &.on
      background-color $theme_color
</style>
