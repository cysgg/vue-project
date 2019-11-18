<template>
  <div>
    <div v-html="strategyContent"></div>
    <div class="copyRight" v-if="strategyItemInfo.userInfo">
      <p>本文著作权归 @{{strategyItemInfo.userInfo.name}} 所有，任何形式转载请联系作者。©{{strategyItemInfo.date.slice(0, 4)}} 马蜂窝自由行</p>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  name: 'strategyContent',
  data () {
    return {
      strategyContent: ''
    }
  },
  inject: {
    strategyItemInfo: {
      default: null
    }
  },
  created () {
    api.getStrategyContentInfo().then(res => {
      console.log(res)
      this.strategyContent = res.strategyContent
    })
  }
}
</script>

<style scoped lang='stylus'>
>>> ._j_content
  .f-block
    .p-section
      font-size 14px
      line-height 26px
      margin 13px 0 28px
      word-break break-all
    b
      color #333
      font-weight bold
    &>img
      margin 10px 0
    img
      width 100%
    .img-an
      color #999
    h2
      font-size 24px
      color #333
      margin 18px 0
    h3
      font-size 18px
      margin 15px 0
      color #333
    .tips-box
      margin 35px 0
      border 1px solid #ffe3b7
      background-color #fff5e5
      padding 15px 20px
      line-height 26px
      color #333
      font-size 14px
    .product-box
      margin 35px 0
      border 1px solid #e5e5e5
      padding 9px
      .item
        margin-bottom 10px
        &:last-child
          margin 0
        a
          display block
          padding 10px 72px 10px 10px
          height 90px
          position relative
          color #999
        .img
          float left
          margin-right 20px
          width 140px
          overflow hidden
        h3
          margin 10px 0
          font-size 16px
          line-height 20px
          font-weight normal
          color #666
          height 40px
          overflow hidden
        img
          min-width 100%
        .p-arr
          position absolute
          right 18px
          top 40px
          width 12px
          height 22px
          background url(../../assets/images/list_sprites7.png) no-repeat -140px -40px
  .raiders
    margin 30px 0
    position relative
    a
      display block
      width 680px
      height 153px
      position relative
    .img
      width 236px
      height 153px
      float left
      margin-right 15px
      overflow hidden
      position relative
      z-index 7
      img
        width 100%
    .info
      float left
      width 424px
      height 153px
      position relative
      z-index 7
      h2
        font-size 18px
        color #333
        font-weight normal
        line-height 24px
      p
        color #666
        font-size 14px
        overflow hidden
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 4
.copyRight
  width 680px
  padding-top 45px
  overflow hidden
  background url(../../assets/images/copyright.png) no-repeat center center
  margin-top 20px
  p
    text-align-last left
    background-color #fff
    line-height 20px
    color #d1d1d1
    font-size 12px
</style>
