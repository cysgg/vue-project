<template>
  <div class="hotel-search">
    <mddInput
      @keyupHolder="keyupHolder"
      @keydownHolder="keydownHolder"
      @blurHolder="blurHolder"
      @focusHolder="focusHolder"
      :inputValue.sync="searchValue"
      placeholder="出行目的地,如a"
      class="hotel-input"
      >
      <template v-slot:popArea>
        <div
          class="not-cont"
          v-show="showPop"
        >
          <ul>
            <li
              v-for="(li, i) in hotelMddList"
              :key="i"
            >
              <h2>{{li.region}}</h2>
              <p>
                <router-link
                  to=""
                  v-for="travel in li.travelList"
                  :key="travel"
                  @mousedown.native="searchClickHolder(travel)"
                >
                  {{travel}}
                </router-link>
              </p>
            </li>
          </ul>
        </div>
      </template>
      <template v-slot:tipsArea>
        <div v-show="showPanel" class="search-suggest-panel">
          <div
            class="dl"
            v-for="(tip) in inputTipsList"
            :key="tip.type"
          >
            <div class="dt">
              <i :class="classJson[tip.type]"></i>
            </div>
            <div
              class="dd"
              v-for="area in tip.areaList"
              :key="area.eName"
              @mousedown="searchClickHolder(area.name)"
            >
              <router-link to="">
                <span v-if="area.HotelNums" class="num">{{area.HotelNums}}家酒店</span>
                <h4>
                  <span v-if="area.type === 'mdd'" class="skey">[目的地] {{area.name}}</span>
                  <span v-else class="skey">{{area.name}}</span>
                  <span class="en">{{area.eName}}</span>
                </h4>
                <p>{{area.formArea}}</p>
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </mddInput>
    <timeInput
      placeholder="入住日期"
      class="timeInput"
      :maxDateList="endDateList"
      @dateChange="getNewStartDate"
      >
    </timeInput>
    <timeInput
      placeholder="离店日期"
      class="timeInput"
      :minDateList="startDateList"
      @dateChange="getNewEndDate"
    >
    </timeInput>
    <peopleInput
      class="peopleInput"
      @peopleCheck="getNewPeopleCount"
      :peopelContent="peopleCount"
    ></peopleInput>
    <div @click="searchSubmit" class="btn-search">
      <i></i>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
import mddInput from 'components/common/mddInput'
import timeInput from 'components/common/timeInput'
import peopleInput from 'components/common/peopleInput'
import { debounce } from '@/utils/common'
export default {
  name: 'hotelSearch',
  components: {
    mddInput,
    timeInput,
    peopleInput
  },
  data () {
    return {
      hotelMddList: [], // 搜索框输入前初始提示数据
      inputTipsList: [], // 搜索框输入前提示数据
      searchValue: '', // 搜索框内容
      startDateList: [], // 开始的日期数组 [year, month, day]
      endDateList: [], // 结束的日期数组 [year, month, day]
      showPop: false, // 是否显示提示
      showPanel: false, // 是否显示初始提示
      isblur: true, // 搜索是否失焦
      debounceTipsApi: null, // 防抖的数据提示api
      peopleCountList: [], // 人数的数组 [adultNum, kidNum]
      classJson: {
        'mdd': 'sicon-place',
        'scenic': 'sicon-scenic',
        'hotel': 'sicon-hotel'
      }
    }
  },
  computed: {
    peopleCount () { // 计算的peopleInput显示内容
      if (this.peopleCountList.length > 0) {
        return this.peopleCountList[0] + '成人,' + this.peopleCountList[1] + '儿童'
      }
      return '人数未定'
    },
    searchQuery () { // 跳转hotelMdd 的query
      if (this.searchValue !== '' && this.startDateList.length > 0 && this.endDateList.length > 0 && this.peopleCountList.length > 0) {
        return {
          mdd: this.searchValue,
          startDate: this.startDateList,
          endDate: this.endDateList,
          peopleCountList: this.peopleCountList
        }
      }
      return false
    }
  },
  created () {
    api.getInputPopInfo().then(res => {
      console.log(res)
      this.hotelMddList = res.hotelMddList
    })
    this.debounceTipsApi = debounce(this.inputTipHolder, 200)
  },
  methods: {
    judgePopOrPanel () { // 搜索输入提示框和默认提示框显示的计算方法
      this.debounceTipsApi()
      if (this.searchValue) {
        this.showPop = false
      } else {
        this.showPop = true
        this.showPanel = false
      }
    },
    focusHolder () { // 搜索 focus
      this.judgePopOrPanel()
      this.debounceTipsApi()
      this.isblur = false
    },
    blurHolder () { // 搜索 blur
      this.showPop = false
      this.showPanel = false
      this.isblur = true
    },
    keydownHolder () { // 搜索 keydown
      this.judgePopOrPanel()
    },
    keyupHolder () { // 搜索 keyup
      this.judgePopOrPanel()
    },
    inputTipHolder () { // 搜索 input
      if (this.searchValue && !this.isblur) {
        api.getInputTipsInfo({val: this.searchValue}).then(res => {
          console.log(res)
          this.inputTipsList = res.inputTipsList
          this.showPanel = true
        })
      }
    },
    searchClickHolder (val) { // 搜索提示框 点击事件
      this.searchValue = val
    },
    getNewStartDate (list) { // 开始时间框 获得开始时间子组件的值
      this.startDateList = list
    },
    getNewEndDate (list) { // 结束时间框 获得结束时间子组件的值
      this.endDateList = list
    },
    getNewPeopleCount (list) { // 人数框 获得人数子组件的值
      this.peopleCountList = list
    },
    searchSubmit () { // 搜索按钮 点击提交事件
      console.log('search')
      this.searchFunc()
    },
    searchFunc () {
      if (this.searchQuery) {
        console.log(1)
        this.$router.push({name: 'hotelMdd', params: this.searchQuery})
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
.hotel-search
  height 47px
  margin 40px 0 70px 0
  position relative
  z-index 9
  &:after
    content ''
    clear both
    height 0
    display block
    overflow hidden
  .hotel-input
    width 352px
    height 45px
    float left
    margin-right 10px
  .not-cont
    position absolute
    width 725px
    padding 25px 10px 0 10px
    border 1px solid #c6c6c6
    border-radius 4px
    box-shadow 1px 1px 3px rgba(0, 0, 0, .1)
    background-color #fff
    z-index 10
    li
      margin-bottom 10px
      &:after
        content ''
        clear both
        display block
        height 0
        overflow hidden
      h2
        font-size 14px
        color #666
        font-weight bold
        width 70px
        padding-left 10px
        float left
      p
        float left
        width 645px
        a
          display inline-block
          margin-bottom 15px
          font-size 14px
          width 107px
          color #666
          &:hover
            color $theme_color
  .search-suggest-panel
    position absolute
    z-index 100
    min-width 398px
    background-color #fff
    border-radius 4px
    width 548px
    margin-top 2px
    border 1px solid #c6c6c6
    box-shadow 1px 1px 3px rgba(0, 0, 0, .1)
    .dl
      line-height 20px
      position relative
      border-bottom 1px solid #c6c6c6
      a:hover
        background #f2f2f2
      .dt
        float left
        width 70px
        i
          float left
          width 24px
          height 24px
          margin 14px 0 0 24px !important
          background url(../../assets/images/suggest-sprite5.png) no-repeat
        .sicon-place
          background-position 0 0
        .sicon-scenic
          background-position 0 -100px
        .sicon-hotel
          background-position 0 -50px
      .dd
        margin-left 70px
        height 54px
        border-left 1px solid #c6c6c6
        a
          display block
          height 40px
          padding 8px 20px 6px 25px
          color #999
          overflow hidden
          .num
            float right
            margin 8px 0 0 10px
            font-size 14px
          p
            height 20px
            overflow hidden
          h4
            overflow hidden
            font-size 14px
            font-weight normal
            white-space nowrap
            text-overflow ellipsis
            .skey
              color #333
              margin-right 12px
  .timeInput
    position relative
    float left
    height 47px
    margin-right 10px
    cursor pointer
  .peopleInput
    position relative
    float left
    height 47px
    margin-right 10px
  .btn-search
    width 46px
    height 46px
    line-height 46px
    background-color $theme_color
    float left
    border-radius 5px
    cursor pointer
    text-align center
    &:hover
      background-color #ff8a00
    i
      display inline-block
      width 24px
      height 24px
      vertical-align middle
      background url(../../assets/images/header-sprites3.png) no-repeat
      background-position 0 -165px
</style>
