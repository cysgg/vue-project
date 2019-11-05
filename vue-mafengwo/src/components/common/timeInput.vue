<template>
  <div
    class="timeInput"
    :class="{'focus': hasFocus}"
    @click="focusHolder"
  >
    <div :data-word="placeholder" class="input-wrap">
      <span>{{spanContent}}</span>
      <i></i>
    </div>
    <div v-show="hasFocus" class="time-wrap">
      <timePanel :topDate="maxDateList" :floorDate="minDateList" :dateList="dateArr" @selectDay="checkDate"></timePanel>
    </div>
  </div>
</template>

<script>
import timePanel from 'components/common/timePanel'
export default {
  name: 'timeInput',
  props: {
    placeholder: {
      type: String,
      default: '日期'
    },
    maxDateList: {
      type: Array
    },
    minDateList: {
      type: Array
    }
  },
  components: {
    timePanel
  },
  data () {
    return {
      hasFocus: false,
      bindBulrHolder: null,
      dateArr: []
    }
  },
  computed: {
    spanContent () {
      if (this.dateArr.length > 0) {
        return this.dateArr.join('-')
      } else {
        return this.placeholder
      }
    }
  },
  methods: {
    focusHolder (e) {
      this.hasFocus = true
    },
    bulrHolder (e) {
      if (!this.findwords(e.path)) {
        this.hasFocus = false
      }
    },
    findwords (list) {
      return list.some(v => {
        if (v.dataset && v.dataset.word && (v.dataset.word === this.placeholder)) {
          return true
        } else {
          return false
        }
      })
    },
    checkDate (dateList) {
      console.log(dateList)
      this.dateArr = dateList
      this.hasFocus = false
      this.$emit('dateChange', dateList)
    }
  },
  mounted () {
    this.bindBulrHolder = this.bulrHolder.bind(this)
    window.addEventListener('click', this.bindBulrHolder, false)
  },
  beforeDestroy () {
    window.removeEventListener('click', this.bindBulrHolder, false)
  }
}
</script>

<style scoped lang='stylus'>
.timeInput
  &.focus
    .input-wrap
      span
        border 1px solid $theme_color
        box-shadow 0 0 5px $theme_color
        transition box-shadow .25s linear 0s
  .input-wrap
    span
      display block
      width 170px
      height 45px
      line-height 45px
      border 1px solid #999
      border-radius 4px
      font-size 16px
      color #666
      padding 0 0 0 15px
    input
      position absolute
      bottom 0
      left 0
      z-index -1
      visibility hidden
      padding 0
      border 0
      width 100%
      display block
      height 45px
      line-height 45px
      border-radius 4px
      font-size 16px
      color #666
    i
      display block
      width 16px
      height 16px
      right 11px
      position absolute
      top 15px
      cursor pointer
      overflow hidden
      background url(../../assets/images/mfw_logo.png) 0 -140px no-repeat
  .time-wrap
    position absolute
    left 0
    display block
    width 250px
    z-index 2000
    border 1px solid $theme_color
    border-radius 4px
    box-shadow 0 0 4px $theme_color
    background #fefefe
    padding 12px
    overflow hidden
    font-size 14px
    color #333
    &:before,
    &:after
      content ''
      display table
      border-collapse collapse
    &:after
      clear both
</style>
