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
      <div class="mfw-aside">
        <safetyPrevention class="asidebox"></safetyPrevention>
        <traveller class="asidebox"></traveller>
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
export default {
  name: 'home',
  components: {
    showSilder,
    tabList,
    travelnotes,
    safetyPrevention,
    traveller
  }
}
</script>

<style scoped lang="stylus">
.mfw-focus
  position relative
  z-index 20
  margin 58px 0 20px 0
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
