<template>
  <div class="fixed-wrap">
    <topFixedBar
      v-show="showTopBar"
      :endNum="endNum"
      :nowNum="nowNum"
      topBarTitle="贡嘎旅游攻略"
      topBarText="贡嘎大环线，来自蜀山之王的凝视"
    ></topFixedBar>
  </div>
</template>

<script>
import topFixedBar from 'components/common/topFixedBar'
export default {
  name: 'fixedBar',
  components: {
    topFixedBar
  },
  data () {
    return {
      endNum: 0,
      nowNum: 0,
      showTopBar: false
    }
  },
  methods: {
    listenScroll (scrollTop, clientHeight, scrollHeight) {
      this.endNum = scrollHeight
      this.nowNum = scrollTop
      if (scrollTop > Math.floor(document.documentElement.clientWidth / 2.7) + 100) {
        this.showTopBar = true
      } else {
        this.showTopBar = false
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
.fixed-wrap
  width 100%
  position fixed
  top 0
  z-index 88
  background rgba(255, 255, 255, .95)
  box-shadow 0 0 3px rgba(0, 0, 0, .3)
</style>
