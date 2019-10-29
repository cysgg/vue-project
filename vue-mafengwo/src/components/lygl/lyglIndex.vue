<template>
  <div>
    <tjgl class="cont-main"></tjgl>
    <sidebar class="sidebar"></sidebar>
    <div class="clear"></div>
  </div>
</template>

<script>
import tjgl from 'components/lygl/tjgl'
import sidebar from 'components/lygl/sidebar'
export default {
  name: 'lyglIndex',
  components: {
    tjgl,
    sidebar
  }
}
</script>

<style scoped lang='stylus'>
.cont-main
  float right
  width 790px
  margin-bottom 20px
.sidebar
  float left
  width 160px
</style>
