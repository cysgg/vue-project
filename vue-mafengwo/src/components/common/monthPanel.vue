<template>
  <div class="viewport">
    <ul class="month-panel">
      <li
        v-for="(day, index) in daysList"
        :key="index"
        :class="day && day.bgimg ? '_j_hover' : 'after'"
      >
        <span v-if="!day || !day.bgimg"></span>
        <em v-if="!day"></em>
        <em v-if="day && !day.bgimg">{{day.day}}</em>
        <span v-if="day && day.bgimg">
          <img v-lazy="day.bgimg" alt="">
        </span>
        <em v-if="day && day.bgimg">{{day.day}}</em>
        <span v-if="day && day.bgimg" class="mark">
          <i>{{day.addr}}</i>
          <div class="user">
            <img v-lazy="day.userImg" :title="day.userName" alt="">
          </div>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'monthPanel',
  props: {
    daysInfo: {
      type: Array
    },
    currYear: {
      type: String
    },
    currMonth: {
      type: Number | String
    }
  },
  computed: {
    daysList () {
      if (this.currYear && this.currMonth && this.daysInfo) {
        let firstDay = this.currYear + '-' + this.currMonth + '-' + '01'
        let date = new Date(Date.parse(firstDay))
        let startCount = date.getDay()
        let monthLen = new Date(this.currYear, this.currMonth, 0).getDate()
        let monthList = this.formatMonthList(monthLen, this.daysInfo)
        let part = (monthList.length + startCount) % 7
        let endCount = part === 0 ? 0 : 7 - part
        return new Array(startCount).concat(monthList, new Array(endCount))
      }
      return []
    }
  },
  methods: {
    formatMonthList (len, list) {
      if (len > list.length) {
        return new Array(len).fill(1).map((v, i) => {
          if (i < list.length) {
            return list[i]
          } else {
            return {day: i + 1}
          }
        })
      } else {
        return list
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
.viewport
  width 981px
  margin 0 auto
  overflow hidden
  .month-panel
    margin-left -6px
    overflow hidden
    li
      display inline
      float left
      margin 6px 0 0 6px
      width 135px
      height 84px
      position relative
      overflow hidden
      span
        display block
        img
          width 135px
          height 84px
      em
        position absolute
        left 5px
        bottom 3px
        font-family Georgia, "Times New Roman", Times, serif
        font-style normal
        font-size 22px
        color #fff
        text-shadow 0 0 3px rgba(0, 0, 0, 1)
      .mark
        position absolute
        left 0
        top 0
        width 100%
        height 100%
        background-color rgba(0, 0, 0, .8)
        font-size 24px
        color #ffffff
        text-align center
        line-height 78px
        overflow hidden
        visibility hidden
        i
          font-style normal
          color #fff
          font-size 24px
          cursor pointer
        .user
          position absolute
          bottom 0
          right 0
          width 16px
          height 16px
          padding 2px 0 0 2px
          background-color #fff
          line-height 0
          overflow hidden
          display inline-block
          cursor pointer
          img
            vertical-align top
            width 16px
            height 16px
    ._j_hover
      &:hover
        .mark
          visibility visible
    .after
      span
        border 1px solid #e6e6e6
        height 82px
      em
        color #c2c2c2
        text-shadow none
</style>
