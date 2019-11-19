<template>
  <div class="wrap clearfix">
    <div class="sideL">
      <!-- 头部攻略信息 -->
      <topTitle></topTitle>
      <!-- 攻略文章详情 -->
      <strategyContent></strategyContent>
      <!-- 评论 -->
      <strategyCmt></strategyCmt>
    </div>
    <div class="sideR">
      <!-- 右边导航栏 -->
      <strategyNav ref="strategyNav"></strategyNav>
    </div>
    <div class="relate"></div>
  </div>
</template>

<script>
import topTitle from 'components/strategy/topTitle'
import strategyContent from 'components/strategy/strategyContent'
import strategyNav from 'components/strategy/strategyNav'
import strategyCmt from 'components/strategy/strategyCmt'
import api from '@/api/index'
export default {
  name: 'strategy',
  components: {
    topTitle,
    strategyContent,
    strategyNav,
    strategyCmt
  },
  data () {
    return {
      strategyInfo: {},
      scrollHanderBind: null
    }
  },
  provide () {
    return {
      strategyItemInfo: this.strategyInfo
    }
  },
  created () {
    api.getStrategyInfo(this.$route.params).then(res => {
      console.log(res)
      for (let key of Object.getOwnPropertyNames(res.strategyInfo)) {
        this.$set(this.strategyInfo, key, res.strategyInfo[key])
      }
    })
  },
  methods: {
    scrollHander () {
      let scrollTop = document.documentElement.scrollTop
      let clientHeight = document.documentElement.clientHeight
      let scrollHeight = document.documentElement.scrollHeight
      this.$refs.strategyNav.scrollListen(scrollTop, clientHeight, scrollHeight)
    }
  },
  mounted () {
    this.scrollHanderBind = this.scrollHander.bind(this)
    window.addEventListener('scroll', this.scrollHanderBind)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHanderBind)
  }
}
</script>

<style scoped lang='stylus'>
.wrap
  width 1000px
  margin 20px auto 0
  position relative
  .sideL
    width 680px
    float left
  .sideR
    width 275px
    padding-top 5px
    position absolute
    right 0
    height 100%
    overflow visible
</style>
