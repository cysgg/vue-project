<template>
  <div>
    <mddFocus></mddFocus>
    <mddHot class="row"></mddHot>
    <seasonRecommend class="row"></seasonRecommend>
  </div>
</template>

<script>
import mddFocus from 'components/mdd/mddFocus'
import mddHot from 'components/mdd/mddHot'
import seasonRecommend from 'components/mdd/seasonRecommend'
export default {
  name: 'mdd',
  components: {
    mddFocus,
    mddHot,
    seasonRecommend
  }
}
</script>

<style scoped lang="stylus">
</style>
