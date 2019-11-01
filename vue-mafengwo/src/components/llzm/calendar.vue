<template>
  <div class="calendar">
    <div class="hd">
      <span class="hd-title">
        <strong>历历在目</strong>
        欢迎来到蚂蜂窝的宝藏库！
      </span>
      <div class="dl">
        <em class="cur-month">{{currMonth}}</em>
        <em class="cur-year">{{currYear}}</em>
      </div>
    </div>
    <div class="month-tab">
      <ul>
        <li
          v-for="(month, index) in Array.from({length: 12}, (v, i) => i+1)"
          :key="index"
          :class="{
            'on': monthList.month === index,
            'no': monthLen <= index
          }"
          @click="scrollToMonth(index)"
        >
          <div>
            <span :class="formatEnMonth(month)"></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="week-bar">
      <div class="week-bg"></div>
      <ul>
        <li
          v-for="weekDay in week"
          :key="weekDay"
          :class="weekDay"
        >
          {{weekDay}}
        </li>
      </ul>
    </div>
    <div class="bd">
      <monthPanel :currYear="currYear" :currMonth="currMonth" :daysInfo="monthList.monthList"></monthPanel>
    </div>
  </div>
</template>

<script>
import monthPanel from 'components/common/monthPanel'
import { formatEnMonth } from '@/utils/filter'
import { week } from '@/utils/json'
export default {
  name: 'calendar',
  props: {
    currYear: {
      type: String
    },
    monthLen: {
      type: Number
    },
    monthList: {
      type: Object,
      validator (v) {
        let names = Object.getOwnPropertyNames(v)
        return names.includes('month') && names.includes('monthList')
      }
    }
  },
  computed: {
    week () {
      return week
    },
    currMonth () {
      let month = parseInt(this.monthList.month) + 1
      return month > 9 ? month : '0' + month
    }
  },
  components: {
    monthPanel
  },
  methods: {
    formatEnMonth: formatEnMonth,
    scrollToMonth (MonthIndex) {
      this.$emit('scrollTo', MonthIndex)
    }
  }
}
</script>

<style scoped lang='stylus'>
.calendar
  margin-bottom 20px
  .hd
    height 50px
    width 980px
    margin 0 auto
    padding 15px 0
    overflow hidden
    .hd-title
      float left
      width 268px
      height 57px
      background url(../../assets/images/cal-bg4.png) no-repeat 0 0
      overflow hidden
      text-indent -9999px
    .dl
      float right
      font-family Georgia, "Times New Roman", Times, serif
      font-size 26px
      color #4c4844
      .cur-month
        margin 0 10px 0 20px
        font-size 50px
  .month-tab
    margin 10px auto
    width 980px
    height 50px
    overflow hidden
    ul
      margin-left -40px
      li
        display inline
        margin-left 40px
        float left
        width 45px
        height 50px
        text-align center
        line-height 48px
        div
          display inline-block
          span
            display inline-block
            width 43px
            height 49px
            cursor pointer
            overflow hidden
            vertical-align top
            line-height 200px
            background url(../../assets/images/cal-bg4.png) no-repeat 0 -57px
            &.Jan
              background-position 0 -57px
            &.Feb
              background-position -43px -57px
            &.Mar
              background-position -86px -57px
            &.Apr
              background-position -129px -57px
            &.May
              background-position -172px -57px
            &.Jun
              background-position -215px -57px
            &.Jul
              background-position -258px -57px
            &.Aug
              background-position -301px -57px
            &.Sept
              background-position -344px -57px
            &.Oct
              background-position -387px -57px
            &.Nov
              background-position -430px -57px
            &.Dec
              background-position -473px -57px
      .on
        .Jan
          background-position 0 -106px
        .Feb
          background-position -43px -106px
        .Mar
          background-position -86px -106px
        .Apr
          background-position -129px -106px
        .May
          background-position -172px -106px
        .Jun
          background-position -215px -106px
        .Jul
          background-position -258px -106px
        .Aug
          background-position -301px -106px
        .Sept
          background-position -344px -106px
        .Oct
          background-position -387px -106px
        .Nov
          background-position -430px -106px
        .Dec
          background-position -473px -106px
      .no
        .Jan
          background-position 0 -155px
        .Feb
          background-position -43px -155px
        .Mar
          background-position -86px -155px
        .Apr
          background-position -129px -155px
        .May
          background-position -172px -155px
        .Jun
          background-position -215px -155px
        .Jul
          background-position -258px -155px
        .Aug
          background-position -301px -155px
        .Sept
          background-position -344px -155px
        .Oct
          background-position -387px -155px
        .Nov
          background-position -430px -155px
        .Dec
          background-position -473px -155px
  .week-bar
    height 33px
    margin 10px 0 25px
    position relative
    .week-bg
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      opacity 0.5
      background-color #fff
    ul
      position relative
      width 980px
      height 33px
      margin 0 auto
      background url(../../assets/images/cal-bg4.png) no-repeat 0 -205px
      overflow hidden
      li
        float left
        margin-left 6px
        display inline
        width 125px
        height 30px
        overflow hidden
        line-height 100px
        font-size 20px
        color #999
        &.sun
          background-position 0 -97px
        &.mon
          background-position 0 -128px
        &.tue
          background-position 0 -159px
        &.wed
          background-position 0 -190px
        &.thu
          background-position 0 -221px
        &.fri
          background-position 0 -252px
        &.sat
          background-position 0 -283px
  .bd
    width 100%
    position relative
</style>
