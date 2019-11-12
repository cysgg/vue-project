<template>
  <div class="hotel-main">
    <div class="h-title">订酒店</div>
    <hotelSearch></hotelSearch>
    <div class="h-notice">
      <ul>
        <li
          v-for="(item,index) in noticeList"
          :key="index"
        >
          <i :class="item.icon"></i>
          <div class="flt1">
            <h2>{{item.title}}</h2>
            <p>{{item.text}}</p>
          </div>
        </li>
      </ul>
    </div>
    <ztzs class="row"></ztzs>
    <tjjd class="row"></tjjd>
  </div>
</template>

<script>
import ztzs from 'components/djd/ztzs'
import tjjd from 'components/djd/tjjd'
import hotelSearch from 'components/djd/hotelSearch'
export default {
  name: 'djdIndex',
  components: {
    hotelSearch,
    ztzs,
    tjjd
  },
  data () {
    return {
      noticeList: [{
        icon: 'notice01',
        title: '住宿攻略',
        text: '区域攻略到特色主题，应有尽有'
      }, {
        icon: 'notice02',
        title: '专享价格',
        text: '多平台价格对比，天天专享特惠'
      }, {
        icon: 'notice03',
        title: '真实点评',
        text: '超过100万真实用户点评和游记'
      }]
    }
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
  &:after
    content ''
    clear both
    height 0
    display block
    overflow hidden
  .h-title
    color #333
    font-size 24px
    line-height 30px
  .h-notice
    ul
      &:after
        content ''
        clear both
        height 0
        display block
        overflow hidden
      li
        float left
        width 333px
        i
          display block
          float left
          margin-right 13px
          background url(../../assets/images/hotel-sprites1.png) no-repeat
        .notice01
          width 35px
          height 42px
          background-position 0 0
        .notice02
          width 43px
          height 42px
          background-position -40px 0
          margin-left 40px
        .notice03
          width 44px
          height 42px
          background-position -85px 0
          margin-left 80px
        .flt1
          float left
          h2
            font-size 18px
            color #666
            line-height 18px
            font-weight normal
          p
            font-size 14px
            color #666
            margin-top 5px
</style>
