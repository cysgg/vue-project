<template>
  <div class="hotel-main">
    <div class="h-title">订酒店</div>
    <hotelSearch></hotelSearch>
  </div>
</template>

<script>
import hotelSearch from 'components/djd/hotelSearch'
export default {
  name: 'djdIndex',
  components: {
    hotelSearch
  }
}
</script>

<style scoped lang='stylus'>
.hotel-main
  width 1000px
  position relative
  z-index 5
  margin 0 auto
  padding-top 60px
  .h-title
    color #333
    font-size 24px
    line-height 30px
</style>
