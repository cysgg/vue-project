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
    </div>
  </div>
</template>

<script>
import showSilder from 'components/home/showSilder'
import tabList from 'components/home/tabList'
import travelnotes from 'components/home/travelnotes'
export default {
  name: 'home',
  components: {
    showSilder,
    tabList,
    travelnotes
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
</style>
