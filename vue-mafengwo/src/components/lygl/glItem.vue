<template>
  <div class="gl_item">
    <router-link to="">
      <img :src="imgUrl" :alt="itemName">
    </router-link>
    <div class="update_time">更新时间：{{update_time}}</div>
    <div class="down_cout">
      <span></span>
      <p>{{down_cout}}人下载</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'glItem',
  props: {
    imgUrl: {
      type: String
    },
    itemName: {
      type: String
    },
    update_time: {
      type: String
    },
    down_cout: {
      type: String
    }
  }
}
</script>

<style scoped lang='stylus'>
.gl_item
  width 130px
  margin-right 40px
  float left
  a
    display block
    height 184px
    width 130px
    overflow hidden
    img
      width 100%
      height 100%
  .update_time
    margin-top 5px
    text-align center
    font-size 10px
  .down_cout
    height 24px
    width 130px
    background-color #EBEBEB
    border-radius 30px
    margin-top 5px
    position relative
    span
      display block
      position absolute
      top 0
      left 0
      height 24px
      width 24px
      background url(../../assets/images/new-gl-icon6.png) -20px -90px no-repeat
    p
      line-height 24px
      color #666
      padding-left 30px
</style>
