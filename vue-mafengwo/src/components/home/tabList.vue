<template>
  <div>
    <div class="sales-entrys-container">
      <router-link
        v-for="(item, index) in salesList"
        :key="index"
        class="sales-entrys-item"
        to=""
        tag="a"
        :class="item.class"
      >
        <div class="sales-entrys-title">
          {{item.title}}
        </div>
        <div class="sales-entrys-subtitle">
          {{item.subTitle}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabList',
  data () {
    return {
      salesList: [
        {
          title: '自由行',
          subTitle: '旅行就要更自在',
          class: 'entrys-bg-sales'
        }, {
          title: '跟团游',
          subTitle: '行程透明省心游',
          class: 'entrys-bg-group'
        }, {
          title: '当地游',
          subTitle: '最地道的玩法体验',
          class: 'entrys-bg-localdeals'
        }, {
          title: '机票',
          subTitle: '特惠一折起',
          class: 'entrys-bg-flight'
        }, {
          title: '订酒店',
          subTitle: '一键全网比价',
          class: 'entrys-bg-hotel'
        }, {
          title: '签证',
          subTitle: '出签率高服务佳',
          class: 'entrys-bg-visa'
        }, {
          title: '游轮',
          subTitle: '以东的海上城堡',
          class: 'entrys-bg-ship'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.sales-entrys-container
  width 100%
  margin-bottom 19px
  font-size 0
  white-space nowrap
  .sales-entrys-item
    width 127px
    height 47px
    padding 8px 0 0 7px
    display inline-block
    border-radius 3px
    cursor pointer
    margin-left 8px
    font-family 'PingFangSC-Semibold'
    border 1px solid #e5e5e5
    background-image url(../../assets/images/mfw_logo3.png)
    background-repeat no-repeat
    background-size 104px auto
    background-position-x 59px
    &:first
      margin-left 0
    &:hover
      box-shadow 0 4px 12px 0 rgba(0, 0, 0, .08)
      .sales-entrys-title
        background-image url('../../assets/images/sales_title_active.png')
        background-repeat no-repeat
        background-size 100% 7px
        background-position bottom
    .sales-entrys-title
      color #333
      display inline-block
      height 22px
      font-size 16px
      font-weight 600
      line-height 22px
    .sales-entrys-subtitle
      color #9d9d9d
      height 16px
      font-size 11px
      padding-top 1px
      font-weight 400
      line-height 16px
    &.entrys-bg-sales
      background-position-y -651px
    &.entrys-bg-group
      background-position-y -24px
    &.entrys-bg-localdeals
      background-position-y -129px
    &.entrys-bg-flight
      background-position-y -441px
    &.entrys-bg-hotel
      background-position-y -546px
    &.entrys-bg-visa
      background-position-y -335px
    &.entrys-bg-ship
      background-position-y -233px
</style>
