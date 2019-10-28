<template>
  <div>
    <div class="gonglve-nav" @mouseleave="unselectItem">
      <div
        class="nav-item"
        v-for="(gldhItem, index) in gldhList"
        :key="index"
        @mouseover="selectItem($event, index)"
        :class="{'hover': currIndex === index}"
      >
        <div class="nav-title">
          <h3>{{gldhItem.dh_title}}</h3>
          <b class="gn-arrow"></b>
        </div>
      </div>
      <navPanel v-if="currIndex>-1 && currIndex !== 3" :panelList="currItem"></navPanel>
      <categoryPanel v-if="currIndex === 3" :categoryList="currItem"></categoryPanel>
    </div>
    <div class="input_like">
      <span></span>
      <input type="text" placeholder="请输入想去的地方，如:香港">
      <div class="clear"></div>
    </div>
    <div class="app_d">
      <h3>
        <router-link to="" tag="a">
          <img src="http://images.mafengwo.net/images/app/m/logo_gonglve_v6.png?v=20150825" width="50" height="50" alt="">
        </router-link>
      </h3>
      <div class="domn_in" @mouseover="isShowImg = true" @mouseleave="isShowImg = false">
        <h4>
          <router-link to="" tag="a">马蜂窝自由行APP下载</router-link>
          <div>
            <img v-show="isShowImg" src="https://p3-q.mafengwo.net/s12/M00/17/80/wKgED1vb_fqAeZq0AAAxwHmnAuc675.png" alt="">
          </div>
        </h4>
        <p>
          <router-link to="" tag="a">iPhone版</router-link>
          <span>|</span>
          <router-link to="" tag="a">Android版</router-link>
          <span>|</span>
          <router-link to="" tag="a">iPad版</router-link>
        </p>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
import navPanel from 'components/common/navPanel'
import categoryPanel from 'components/common/categoryPanel'
export default {
  name: 'mddNav',
  data () {
    return {
      gldhList: null,
      currIndex: -1,
      isShowImg: false
    }
  },
  components: {
    navPanel,
    categoryPanel
  },
  computed: {
    currItem () {
      return this.gldhList[this.currIndex].dh_item_list
    }
  },
  created () {
    api.getGldhInfo().then(res => {
      console.log(res)
      this.gldhList = res.gldhList
    })
  },
  methods: {
    selectItem (event, index) {
      this.currIndex = index
    },
    unselectItem () {
      this.currIndex = -1
    }
  }
}
</script>

<style scoped lang="stylus">
.gonglve-nav
  border 1px solid #ddd
  border-bottom 0
  box-shadow 0 0.5px 2px rgba(0, 0, 0, .1)
  position relative
  z-index 10
  .hover
    .nav-title
      margin-right -1px
      color #ff8a00
      .gn-arrow
          background-position -30px -40px
  .nav-title
    height 40px
    padding 0 15px
    border-bottom 1px solid #ddd
    background-color #fff
    line-height 40px
    font-size 14px
    color #666
    position relative
    z-index 2
    h3
      font-size 14px
      font-weight 400
    .gn-arrow
      position absolute
      right 15px
      top 15px
      width 6px
      height 10px
      background url('../../assets/images/new-gl-icon6.png') no-repeat -20px -40px
      overflow hidden
.input_like
  border 2px solid #ffa800
  height 40px
  margin-top 10px
  position relative
  z-index 10
  span
    float left
    height 27px
    width 29px
    background url('../../assets/images/new-gl-icon6.png') -20px -60px no-repeat
    margin-top 7px
    margin-left 8px
  input
    line-height normal
    height 30px
    float left
    width 206px
    padding 3px 0
    border 0
    font-size 12px
    color #888
    margin-left 8px
    margin-top 2px
    outline none
    font-family "Microsoft Yahei",Tahoma,Arial,Helvetica,STHeiti
.clear
  clear both
  display block
  height 0
  font-size 0
  line-height 0
  overflow hidden
.app_d
  border-bottom 1px solid #e3e3e3
  height 50px
  overflow hidden
  padding-bottom 14px
  margin-top 15px
  h3
    float left
    height 50px
    width 50px
    overflow hidden
  .domn_in
    float left
    width 180px
    margin-left 18px
    display inline
    h4
      font-size 16px
      color #414141
      line-height 18px
      font-weight normal
      margin-top 5px
      div
        margin-left 20px
        img
          position absolute
          z-index 99
          width 130px
    p
      margin-top 8px
      a
        float left
        color #666
        line-height 14px
      span
        float left
        color #D8D8D8
        height 12px
        width 2px
        line-height 14px
        padding 0 5px
        overflow hidden
</style>
