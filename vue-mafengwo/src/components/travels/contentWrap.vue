<template>
  <div>
    <!-- {{travelContentList}} -->
    <div class="travel_directory">
      <div class="tarvel_dir_list clearfix">
        <ul>
          <li
            v-for="(value, key, index) in travelNoteInfo.travelNoteInfo"
            :key="index"
            :class="key"
            >
              {{directory[index]}}
              <span>/</span>
              {{value}}
            </li>
        </ul>
      </div>
    </div>
    <div v-html="travelContent">
    </div>
    <div v-show="isload" class="block_loading"></div>
    <div class="vc_total">
      本篇游记共含
      <span>{{travelNoteInfo.wordsCount}}</span>
      个文字
      <span>{{travelNoteInfo.picsCount}}</span>
      张图片。帮助了
      <span>{{travelNoteInfo.helpsCount}}</span>
      名
      <span>{{travelNoteInfo.addr}}</span>
      游客
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  name: 'contentWrap',
  data () {
    return {
      isload: true,
      travelContent: '',
      travelContentQuery: {
        page: 1
      },
      total: 0,
      directory: ['出发时间', '出行天数', '人物', '人均费用']
    }
  },
  inject: {
    travelNoteInfo: {
      default: null
    }
  },
  methods: {
    getContent () {
      api.getTravelContentInfo({
        travelInfo: this.$route.params,
        query: this.travelContentQuery
      }).then(res => {
        console.log(res)
        this.total = res.total
        this.travelContent += res.travelContent
        this.isload = false
      })
    },
    // 统一在大组件travels监听scroll事件
    judgeScroll (scrollTop, clientHeight, scrollHeight) {
      if (!this.isload && scrollHeight < scrollTop + 5 * clientHeight && this.travelContentQuery.page < this.total) {
        this.isload = true
        this.travelContentQuery.page++
        this.getContent()
      }
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style scoped lang='stylus'>
.travel_directory
  border 1px dashed #d7d7d7
  padding-bottom 18px
  width 100%
  margin-bottom 30px
  border-radius 4px
  position relative
  .tarvel_dir_list
    margin-left 20px
    ul
      width 100%
      li
        width 170px
        margin-top 18px
        float left
        display inline
        font-size 14px
        height 22px
        line-height 22px
        color #666
        padding-left 5%
        background url(../../assets/images/151204sprite1.png) no-repeat
        cursor pointer
        span
          color $theme_color
          margin 0 5px
        &.startDate
          background-position -22px 0
        &.durationDay
          background-position -22px -22px
        &.personage
          background-position -22px -44px
        &.price
          background-position -22px -66px
>>> ._j_content_box
  line-height 28px
  font-size 15px
  color #444
  p
    margin-bottom 20px
    text-align justify
    word-break break-word
    a.link
      color #4d4d4d
      border-bottom 1px solid #948e8e
      margin 0 4px
  .article_title
    margin 20px 0
    position relative
    h2
      height 86px
      background url(/images/post/new_notes/nn_v2/t1.gif) 0 0 no-repeat
      overflow hidden
      color #444
      font-size 22px
      font-weight normal
      span
        line-height 95px
        display block
    h2.t9
      height 50px
      overflow hidden
      color #222
      font-size 24px
      line-height 50px
      background 0
      span
        line-height 50px
  .add_pic,
  .video_wrapper
    position relative
    background-color #fff
    margin-bottom 18px
    a
      display inline-block
      position relative
    .pic_tag
      width 600px
      padding-left 0
      margin 8px 0 18px 0
      line-height 24px
      display block
      i
        width 24px
        height 24px
        margin-right 10px
        display inline-block
        background url(../../assets/images/nn_sprite_v25.png) 0 -203px no-repeat
        vertical-align -6px
        &.house
          background-position 0 -203
    .pic_tag,
    .pic_tag a
      color #999
      font-size 12px
.block_loading
  width 100%
  height 30px
  padding 0
  background url(../../assets/images/loading_big.gif) no-repeat center center rgba(255,255,255,0.9)
.vc_total
  padding-top 15px
  border-top 1px solid #e2e2e2
  color #333
  margin-top 40px
</style>
