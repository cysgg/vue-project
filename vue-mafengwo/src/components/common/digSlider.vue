<template>
  <div class="digslidebox" :class="outClass">
    <slider @slideToRight="slideRight" @slideToLeft="slideLeft" :showInfoList="sliderList" >
      <template v-slot:showArea="{currItem}">
        <transition tag="div" :name="slideDec">
          <div :key="currItem.title" class="slide-li">
            <div class="image">
              <router-link to="" tag="a">
                <img v-lazy="currItem.imgUrl" width="260" height="140" alt="">
              </router-link>
            </div>
            <h3>
              <router-link to="" tag="a">
                {{currItem.title}}
              </router-link>
            </h3>
            <p>
              {{currItem.text}}
            </p>
          </div>
        </transition>
      </template>
      <template v-slot:clickArea="{scopeItem}">
        <div class="slide-oi" :class="{'active': scopeItem.currIndex === scopeItem.index}">
        </div>
      </template>
    </slider>
  </div>
</template>

<script>
import slider from 'components/common/slider.vue'
export default {
  name: 'digSlider',
  props: {
    sliderList: {
      type: Array
    },
    outClass: {
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
  },
  components: {
    slider
  }
}
</script>

<style scoped lang="stylus">
.activity
  height 214px !important
  p
    height 20px !important
    white-space nowrap
    text-overflow ellipsis
.digslidebox
  width 260px
  height 246px
  position relative
  overflow hidden
  .slide-li
    width 100%
    .image
      height 140px
      overflow hidden
    h3
      margin 10px 0 5px
      width 260px
      height 26px
      font-size 16px
      color #333
      font-weight normal
      line-height 26px
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      a
        color #333
    p
      height 60px
      line-height 20px
      font-size 14px
      overflow hidden
  .slide-oi
    float left
    display inline
    margin-left 3px
    width 15px
    height 8px
    background-color #fff
    border-radius 4px
    cursor pointer
    overflow hidden
    &.active
      background-color $theme_color
    &:hover
      background-color $theme_color
</style>
