<template>
  <div>
    <!-- 目的地大图 -->
    <mddFocus></mddFocus>
    <!-- 热门目的地 -->
    <mddHot class="row"></mddHot>
    <div class="new-line"></div>
    <!-- 当季推荐 -->
    <seasonRecommend class="row row-bg"></seasonRecommend>
    <div class="new-line"></div>
    <!-- 主题推荐 -->
    <catemdd class="row"></catemdd>
    <div class="new-line"></div>
    <!-- 全球目的地 -->
    <qqmdd class="row-bg"></qqmdd>
  </div>
</template>

<script>
import mddFocus from 'components/mdd/mddFocus'
import mddHot from 'components/mdd/mddHot'
import seasonRecommend from 'components/mdd/seasonRecommend'
import catemdd from 'components/mdd/catemdd'
import qqmdd from 'components/mdd/qqmdd'
export default {
  name: 'mdd',
  components: {
    mddFocus,
    mddHot,
    seasonRecommend,
    catemdd,
    qqmdd
  }
}
</script>

<style scoped lang="stylus">
.row-bg
  padding 40px 0
  width 100%
  background-color #fafafa
.new-line
  width 100%
  height 1px
  background-color #e4e4e4
  overflow hidden
</style>
