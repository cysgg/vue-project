<template>
  <div>
    <!-- 轮播图 -->
    <div class="mfw-focus">
      <showSilder></showSilder>
    </div>
    <!-- container -->
    <div class="mfw-container">
      <!-- tablist -->
      <tabList></tabList>
      <!-- 主体内容 -->
      <div class="mfw-wraper">
        <!-- 游记组件 -->
        <travelnotes></travelnotes>
      </div>
      <!-- nav -->
      <div class="mfw-aside">
        <!-- 安全提示 -->
        <safetyPrevention class="asidebox"></safetyPrevention>
        <!-- 旅行专栏 -->
        <traveller class="asidebox"></traveller>
        <!-- 旅行攻略 -->
        <gonglve class="asidebox"></gonglve>
        <!-- 最新活动 -->
        <activity class="asidebox"></activity>
        <!-- 未知旅行实验室 -->
        <laboratory class="asidebox"></laboratory>
        <!-- 加入马蜂窝 -->
        <joinmfw class="asidebox"></joinmfw>
        <!-- 最新资讯 -->
        <mfwnews class="asidebox"></mfwnews>
      </div>
    </div>
  </div>
</template>

<script>
import showSilder from 'components/home/showSilder'
import tabList from 'components/home/tabList'
import travelnotes from 'components/home/travelnotes'
import safetyPrevention from 'components/common/safetyPrevention'
import traveller from 'components/home/traveller'
import gonglve from 'components/home/gonglve'
import activity from 'components/home/activity'
import laboratory from 'components/home/laboratory'
import joinmfw from 'components/home/joinmfw'
import mfwnews from 'components/home/mfwnews'
export default {
  name: 'home',
  components: {
    showSilder,
    tabList,
    travelnotes,
    safetyPrevention,
    traveller,
    gonglve,
    activity,
    laboratory,
    joinmfw,
    mfwnews
  }
}
</script>

<style scoped lang="stylus">
.mfw-focus
  position relative
  z-index 20
  margin 0 0 20px 0
  clear both
.mfw-container
  width 1000px
  margin 0 auto
  .mfw-wraper
    float right
    width 700px
  .mfw-aside
    float left
    width 260px
    .asidebox
      margin-bottom 30px
</style>
