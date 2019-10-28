<template>
  <div>
    <div class="slide-ul">
      <slot
        v-if="showInfoList && showInfoList.length > 0"
        name="showArea"
        :currItem="currItem"
      ></slot>
    </div>
    <div :class="olClass ? olClass : 'slide-ol'">
      <div
        v-for="(item, index) in showInfoList"
        :key="index + item"
        @click="selectItem(index)"
      >
        <slot
          v-if="showInfoList && showInfoList.length > 0"
          name="clickArea"
          :scopeItem="{currIndex, index, item}"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    showInfoList: {
      type: Array
    },
    olClass: {
      type: String
    }
  },
  data () {
    return {
      currIndex: 0,
      ivTimer: null
    }
  },
  computed: {
    currItem () {
      return this.showInfoList[this.currIndex]
    }
  },
  mounted () {
    this.ivTimer = setInterval(this.loopItem, 10000)
  },
  methods: {
    selectItem (val) {
      if (val > this.currIndex) {
        this.$emit('slideToRight')
      } else {
        this.$emit('slideToLeft')
      }
      this.currIndex = val
    },
    loopItem () {
      this.selectItem((this.currIndex + 1) % this.showInfoList.length)
    }
  },
  beforeDestroy () {
    clearInterval(this.ivTimer)
  }
}
</script>

<style scoped lang="stylus">
.slide-ul
  position absolute
  left 0
  top 0
  width 100%
  height 100%
.slide-ol
  display inline-block
  position absolute
  right 14px
  top 120px
  width 90px
.glslide-ol
  position absolute
  right 26px
  bottom 24px
  width 140px
</style>
