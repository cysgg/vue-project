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
      ivTimer: null,
      visibilitychangeHandlerBind: null
    }
  },
  computed: {
    currItem () {
      return this.showInfoList[this.currIndex]
    }
  },
  mounted () {
    this.ivTimer = setInterval(this.loopItem, 10000)
    this.visibilitychangeHandlerBind = this.visibilitychangeHandler.bind(this)
    document.addEventListener('visibilitychange', this.visibilitychangeHandlerBind)
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
    },
    visibilitychangeHandler () {
      if (document.visibilityState === 'hidden') { // 切离该页面时执行
        clearInterval(this.ivTimer)
      } else if (document.visibilityState === 'visible') { // 切换到该页面时执行
        this.ivTimer = setInterval(this.loopItem, 10000)
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.ivTimer)
    document.removeEventListener('visibilitychange', this.visibilitychangeHandlerBind)
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
.sideslide-ol
  position absolute
  left 0
  bottom 0
  width 100%
  overflow hidden
  height 4px
</style>
