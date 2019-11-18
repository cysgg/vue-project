<template>
  <div class="wrap clearfix">
    <div class="sideL">
      <!-- 头部攻略信息 -->
      <topTitle></topTitle>
      <!-- 攻略文章详情 -->
      <strategyContent></strategyContent>
    </div>
    <div class="sideR">
      <!-- 右边导航栏 -->
      <strategyNav></strategyNav>
    </div>
    <div class="relate"></div>
  </div>
</template>

<script>
import topTitle from 'components/strategy/topTitle'
import strategyContent from 'components/strategy/strategyContent'
import strategyNav from 'components/strategy/strategyNav'
import api from '@/api/index'
export default {
  name: 'strategy',
  components: {
    topTitle,
    strategyContent,
    strategyNav
  },
  data () {
    return {
      strategyInfo: {}
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
