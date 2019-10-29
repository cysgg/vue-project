<template>
  <div class="gl-slider">
    <slider @slideToRight="slideRight" @slideToLeft="slideLeft" :showInfoList="glSliderList" :olClass="'glslide-ol'">
      <template v-slot:showArea="{currItem}">
        <transition  tag="div" :name="slideDec">
          <div :key="currItem" class="show-wrap">
            <router-link to="" tag="a">
              <img v-lazy="currItem" alt="">
            </router-link>
          </div>
        </transition>
      </template>
      <template v-slot:clickArea="{scopeItem}">
        <div class="li" :class="{'on': scopeItem.currIndex === scopeItem.index}"></div>
      </template>
    </slider>
  </div>
</template>

<script>
import api from '@/api/index'
import slider from 'components/common/slider'
export default {
  name: 'glSlider',
  components: {
    slider
  },
  data () {
    return {
      glSliderList: [],
      slideDec: 'slideRight'
    }
  },
  created () {
    api.getGlSliderInfo().then(res => {
      console.log(res)
      this.glSliderList = res.glSliderList
    })
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
.gl-slider
  position relative
  .show-wrap
    width 700px
    height 340px
    overflow hidden
  .li
    display inline-block
    float left
    width 20px
    height 20px
    margin-left 5px
    overflow hidden
    cursor pointer
    background url('../../assets/images/scroll_s.png') center 5px no-repeat
  .on
    background url('../../assets/images/scroll_b.png') 0 0 no-repeat
</style>
