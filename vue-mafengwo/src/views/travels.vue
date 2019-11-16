<template>
  <div>
    <!-- 头部照片组件 -->
    <topFocus></topFocus>
    <!-- 头部作者信息组件 -->
    <titleBar></titleBar>
    <div class="view clearfix">
      <div class="view_con">
        <!-- 文章主体 -->
        <contentWrap ref="contentWrap"></contentWrap>
        <!-- 底部评论 -->
        <travelCmt></travelCmt>
      </div>
      <div class="view_side">
        <!-- 右边导航 -->
        <sideNav class="side-nav"></sideNav>
      </div>
    </div>
  </div>
</template>

<script>
import topFocus from 'components/travels/topFocus'
import titleBar from 'components/travels/titleBar'
import contentWrap from 'components/travels/contentWrap'
import sideNav from 'components/travels/sideNav'
import travelCmt from 'components/travels/travelCmt'
import api from '@/api/index'
export default {
  name: 'travels',
  components: {
    topFocus,
    titleBar,
    contentWrap,
    sideNav,
    travelCmt
  },
  provide () {
    return {
      travelNoteInfo: this.travelInfo
    }
  },
  data () {
    return {
      scrollHanderBind: null,
      travelInfo: {}
    }
  },
  methods: {
    scrollHander (e) {
      let scrollTop = document.documentElement.scrollTop
      let clientHeight = document.documentElement.clientHeight
      let scrollHeight = document.documentElement.scrollHeight
      this.$refs.contentWrap.judgeScroll(scrollTop, clientHeight, scrollHeight)
    }
  },
  created () {
    api.getTravelInfo(this.$route.params).then(res => {
      console.log(res)
      // this.travelInfo = res.travelInfo
      for (let key of Object.getOwnPropertyNames(res.travelInfo)) {
        this.$set(this.travelInfo, key, res.travelInfo[key])
      }
    })
  },
  mounted () {
    this.scrollHanderBind = this.scrollHander.bind(this)
    window.addEventListener('scroll', this.scrollHanderBind)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHanderBind)
  }
}
</script>

<style scoped lang='stylus'>
.view
  position relative
  width 1000px
  margin 40px auto 20px
  &:after,
  &:before
    content ''
    clear both
    display block
    height 0
    overflow hidden
  .view_con
    width 680px
    float left
  .view_side
    position absolute
    width 240px
    height 100%
    right 0
    overflow visible
    .side-nav
      height 100%
</style>
