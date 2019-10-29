<template>
  <div>
    <div class="side-hd">旅游攻略导航</div>
    <navDrop class="nav-drop"></navDrop>
    <rank></rank>
  </div>
</template>

<script>
import navDrop from 'components/lygl/navDrop'
import rank from 'components/lygl/rank'
export default {
  name: 'sidebar',
  components: {
    navDrop,
    rank
  }
}
</script>

<style scoped lang='stylus'>
.side-hd
  height 50px
  font-size 16px
  color #333
  border-bottom 1px solid #eee
  line-height 40px
.nav-drop
  margin-bottom 10px
  height 45px
  line-height 25px
  color #333
  border-bottom 1px solid #eee
</style>
