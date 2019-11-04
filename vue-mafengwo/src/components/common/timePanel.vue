<template>
  <div
    class="timePanel"
    @click.stop
    >
    <div class="time-header">
      <div
        class="icon-wrap header-pre"
        @click="pagePre"
        >
        <span class="icon"></span>
      </div>
      <div class="header-title">
        <span class="time-month">{{monthStr}}</span>
        <span class="time-year">{{currYear}}</span>
      </div>
      <div
        class="icon-wrap header-next"
        @click="pageNext"
        >
        <span class="icon"></span>
      </div>
    </div>
    <div class="time-body">
      <table class="time-table">
        <thead>
          <tr>
            <th
              v-for="(day, index) in cWeek"
              :key="day"
              :class="{'week-end': index > 4}"
              >
                <span>{{day}}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(tr, tri) in startDateStr"
            :key="tri + 'tr'"
          >
            <td
              v-for="(td, tdi) in tr"
              :key="tdi + 'td'"
            >
              <span @click="selectDay(td)" v-if="td !== 0">{{td}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getMonthDayList } from '@/utils/common'
import { dateCMonth } from '@/utils/json'
export default {
  name: 'timePanel',
  props: {
    dateList: {
      type: Array
    }
  },
  data () {
    return {
      currYear: new Date().getFullYear(),
      currMonth: new Date().getMonth() + 1,
      cWeek: ['一', '二', '三', '四', '五', '六', '日']
    }
  },
  computed: {
    currDate () {
      return new Date(this.currYear, this.currMonth, 1)
    },
    startDateStr () {
      let trList = getMonthDayList(this.currYear, this.currMonth)
      return trList.map((v, i, arr) => {
        return arr.slice(i * 7, (i + 1) * 7)
      })
    },
    monthStr () {
      return dateCMonth[this.currMonth]
    }
  },
  watch: {
    dateList (nv) {
      if (nv.length > 0) {
        this.currYear = nv[0]
        this.currMonth = nv[1]
      }
    }
  },
  methods: {
    pagePre (e) {
      this.currMonth--
      if (this.currMonth === 0) {
        this.currYear--
        this.currMonth = 12
      }
    },
    pageNext (e) {
      this.currMonth++
      if (this.currMonth === 13) {
        this.currYear++
        this.currMonth = 1
      }
    },
    selectDay (day) {
      console.log(day)
      this.$emit('selectDay', [this.currYear, this.currMonth, day])
    }
  }
}
</script>

<style scoped lang='stylus'>
.timePanel
  box-sizing border-box
  width 100%
  float left
  .time-header
    border 0
    background 0
    color #333
    font-weight normal
    position relative
    padding .2em 0
    border-top-left-radius 4px
    &:before,
    &:after
      content ''
      display table
      border-collapse collapse
    &:after
      clear both
    .icon-wrap
      width 20px
      height 20px
      position absolute
      top 6px
      color #fff
      .icon
        position static
        width 10px
        height 13px
        margin 4px 5px
        color #fff
        display block
        left 50%
        top 50%
        text-indent -9999px
        overflow hidden
        background-image url(../../assets/images/datepicker-arrow.png)
        background-repeat no-repeat
    .header-pre
      left 2px
      &:hover
        .icon
          background-position 0 -15px
      .icon
        background-position 0 0
    .header-next
      right 2px
      &:hover
        .icon
          background-position -10px -15px
      .icon
        background-position -10px 0
    .header-title
      margin 0 2.3em
      line-height 1.8em
      text-align center
      .time-month
        font-size 16px
  .time-body
    width 99%
    margin 0 auto .4em
    table
      border-collapse collapse
      font-size 14px
      width 100%
      th
        font-weight normal
        width 14.2857%
        padding 0.7em .3em
        text-align center
        border 0
      .week-end
        span
          font-weight bold
          color $theme_color
      td
        text-align center
        padding 0
        width 14.2857%
        border 0
        font-size 12px
        color #666
        span
          border 0
          height 27px
          line-height 28px
          padding 0 1px 1px 0
          background 0
          font-size 12px
          color #333
          font-weight normal
          text-align center
          position relative
          display block
          &:hover
            color #fff
            background-color $theme_color
            font-weight bold
            overflow hidden

</style>
