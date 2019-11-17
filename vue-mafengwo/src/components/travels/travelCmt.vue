<template>
  <div class="cmt-wrap" ref="cmtWrap">
    <paginationContent
       @fetchList="fetchPageApi"
       :paginationList="travelCmtList"
       :page.sync="cmtQuery.page"
       :limit.sync="cmtQuery.limit"
       :total="total"
    >
    <template v-slot:itemContent="{paginationItem}">
      <div class="mfw-cmt">
        <div class="mcmt-info">
          <div class="mcmt-photo">
            <img v-lazy="paginationItem.userImg" alt="">
          </div>
          <div class="mcmt-user">
            <span class="name">{{paginationItem.userNameAndAddr}}</span>
            <span class="level">{{paginationItem.userLevel}}</span>
          </div>
          <div class="mcmt-other">
            <span class="floor">{{paginationItem.id}}F</span>
          </div>
        </div>
        <div class="mcmt-con-wrap clearfix">
          <div class="mcmt-con">
            <div class="mcmt-quote" v-if="paginationItem.quote">
              <p v-if="travelNoteInfo.userInfo">引用{{travelNoteInfo.userInfo.name}}的图片</p>
              <p>
                <img v-lazy="paginationItem.quote" alt="">
              </p>
            </div>
            <div class="mcmt-word">
              <p>{{paginationItem.content}}</p>
            </div>
          </div>
          <div class="mcmt-tag">
            <img v-if="paginationItem.signComment" v-lazy="paginationItem.signComment" alt="">
          </div>
        </div>
        <div class="mcmt-bot">
          <div class="time">{{paginationItem.time}}</div>
        </div>
      </div>
    </template>
    </paginationContent>
  </div>
</template>

<script>
import api from '@/api/index'
import paginationContent from 'components/common/paginationContent'
import { scrollIt } from '@/utils/scrollIt'
export default {
  name: 'travelCmt',
  components: {
    paginationContent
  },
  inject: {
    travelNoteInfo: {
      default: null
    }
  },
  data () {
    return {
      travelCmtList: [],
      cmtQuery: {
        page: 1,
        limit: 20
      },
      total: 0
    }
  },
  methods: {
    fetchPageApi () {
      this.getApiData().then(() => {
        this.$nextTick(() => {
          scrollIt(this.getElementToPageTop(this.$refs.cmtWrap) - 20)
        })
      })
    },
    getApiData () {
      return new Promise((resolve, reject) => {
        api.getTravelCommentInfo({
          travelInfo: this.$route.params,
          query: this.cmtQuery
        }).then(res => {
          console.log(res)
          this.travelCmtList = res.travelComment
          this.total = res.total
          return resolve(res)
        })
      })
    },
    getElementToPageTop (el) {
      if (el.parentElement) {
        return this.getElementToPageTop(el.parentElement) + el.offsetTop
      }
      return el.offsetTop
    }
  },
  created () {
    this.getApiData()
  }
}
</script>

<style scoped lang='stylus'>
.cmt-wrap
  width 680px
  margin 60px auto
  .mfw-cmt
    width 100%
    font-size 12px
    line-height 20px
    margin-bottom 24px
    .mcmt-info
      width 100%
      height 48px
      line-height 48px
      background-color #f6f6f6
      border-top-left-radius 24px
      border-bottom-left-radius 24px
      .mcmt-photo
        width 48px
        height 48px
        border-radius 50%
        float left
        margin-right 20px
        position relative
        border-radius 50%
        overflow hidden
        img
          display block
          width 100%
          height 100%
      .mcmt-user
        float left
        .name
          color $theme_color
          margin-right 6px
        .level
          color #ef523d
          margin-right 6px
      .mcmt-other
        float right
        padding-right 10px
        .floor
          font-size 12px
          color #999
    .mcmt-con-wrap
      padding-left 68px
      margin-top 12px
      position relative
      .mcmt-con
        width 486px
        float left
        .mcmt-quote
          color #999
          p
            margin 5px 0
            img
              width 300px
              display block
        .mcmt-word
          color #666
          font-size 14px
          margin-top 10px
      .mcmt-tag
        float right
        img
          width 58px
          height 50px
    .mcmt-bot
      padding-left 68px
      height 24px
      line-height 24px
      color #999
      margin-top 16px
      .time
        float left
        margin-right 12px
</style>
