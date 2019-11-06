<template>
  <div>
    <router-link to="">
      <div class="pic">
        <img v-lazy="imgDate.imgUrl" alt="">
      </div>
      <div class="fraction">
        {{imgDate.score}}
      </div>
      <div class="info">
        <div class="prize"></div>
        <p>{{imgDate.name}}</p>
        <p class="eng">{{imgDate.eng}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'scoreImgBox',
  props: {
    imgDate: Object
  }
}
</script>

<style scoped lang='stylus'>
img
  width 240px
  height 240px
.fraction
  width 55px
  height 25px
  font-size 18px
  color #fff
  background rgba(0, 0, 0, .5)
  position absolute
  left 13px
  top 13px
  text-align center
  line-height 25px
  border-radius 4px
  z-index 5
.info
  position absolute
  z-index 3
  left 13px
  bottom 13px
  width 220px
  margin-top -30px
  color #fff
  .prize
    text-shadow 2px 2px 2px rgba(0, 0, 0, .8)
  p
    font-size 14px
    text-shadow 2px 2px 2px rgba(0, 0, 0, .8)
  .eng
    font-size 12px
    text-shadow 2px 2px 2px rgba(0, 0, 0, .8)
</style>
