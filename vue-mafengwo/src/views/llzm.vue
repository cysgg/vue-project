<template>
  <div class="wrpper">
    <calendar
      v-for="(calendar, index) in calendarList"
      :key="index"
      :monthList="calendar"
      :monthLen="calendarList.length"
      currYear="2019"
      ref="monthPanel"
      @scrollTo="scrollTo"
      ></calendar>
  </div>
</template>

<script>
import api from '@/api/index'
import calendar from 'components/llzm/calendar'
import { scrollIt } from '@/utils/scrollIt'
export default {
  name: 'llzm',
  components: {
    calendar
  },
  data () {
    return {
      calendarList: []
    }
  },
  computed: {
    monthPanels () {
      return this.$refs.monthPanel.map(v => {
        return v.$el.offsetTop
      })
    }
  },
  methods: {
    scrollTo (monthIndex) {
      scrollIt(this.monthPanels[monthIndex])
    }
  },
  created () {
    api.getCalendarInfo().then(res => {
      console.log(res)
      this.calendarList = res.calendarList
    })
  }
}
</script>

<style scoped lang='stylus'>
.wrpper
  background-image url(http://images.mafengwo.net/images/app/cale/cbg0612.jpg)
  padding-bottom 40px
  padding-top 58px
  min-height 100vh
  background-position center top
  background-repeat no-repeat
  background-size cover
  background-attachment fixed
</style>
