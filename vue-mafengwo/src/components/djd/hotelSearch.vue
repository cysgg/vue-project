<template>
  <div class="hotel-search">
    <mddInput
      @keyupHolder="keyupHolder"
      @keydownHolder="keydownHolder"
      @blurHolder="blurHolder"
      @focusHolder="focusHolder"
      :inputValue.sync="searchValue"
      placeholder="出行目的地"
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
  </div>
</template>

<script>
import api from '@/api/index'
import mddInput from 'components/common/mddInput'
import { debounce } from '@/utils/common'
export default {
  name: 'hotelSearch',
  components: {
    mddInput
  },
  data () {
    return {
      hotelMddList: [],
      inputTipsList: [],
      searchValue: '',
      showPop: false,
      showPanel: false,
      isblur: true,
      inputTipsApi: null,
      classJson: {
        'mdd': 'sicon-place',
        'scenic': 'sicon-scenic',
        'hotel': 'sicon-hotel'
      }
    }
  },
  created () {
    api.getInputPopInfo().then(res => {
      console.log(res)
      this.hotelMddList = res.hotelMddList
    })
    this.inputTipsApi = debounce(this.inputTipHolder, 200)
  },
  methods: {
    judgePopOrPanel () {
      this.inputTipsApi()
      if (this.searchValue) {
        this.showPop = false
      } else {
        this.showPop = true
        this.showPanel = false
      }
    },
    focusHolder () {
      this.judgePopOrPanel()
      this.inputTipsApi()
      this.isblur = false
    },
    blurHolder () {
      this.showPop = false
      this.showPanel = false
      this.isblur = true
    },
    keydownHolder () {
      this.judgePopOrPanel()
    },
    keyupHolder () {
      this.judgePopOrPanel()
    },
    inputTipHolder () {
      if (this.searchValue && !this.isblur) {
        api.getInputTipsInfo({val: this.searchValue}).then(res => {
          console.log(res)
          this.inputTipsList = res.inputTipsList
          this.showPanel = true
        })
      }
    },
    searchClickHolder (val) {
      this.searchValue = val
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
  .hotel-input
    width 340px
    height 45px
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
</style>
