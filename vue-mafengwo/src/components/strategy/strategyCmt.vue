<template>
  <div class="strategy-cmt" ref="cmtWrap">
    <div class="com-form clearfix">
      <div class="img">
        <img v-lazy="cmtImg" alt="">
      </div>
      <div class="fm-tare">
        <textarea v-model="cmtText"></textarea>
        <p v-if="errMsg.length > 0" class="err-msg">{{errMsg}}</p>
        <button @click="addCmt" class="pl">评论</button>
      </div>
    </div>
    <div class="com-box">
      <h2>评论（<span class="_comment_num">{{strategyCommentList.length}}</span>）</h2>
      <paginationContent
        @fetchList="fetchPageApi"
        :paginationList="strategyCommentList"
        :page.sync="query.page"
        :limit.sync="query.limit"
        :total="total"
      >
        <template v-slot:itemContent="{paginationItem}">
          <div class="clearfix comment-item">
            <div class="img">
              <img v-lazy="paginationItem.userImg" alt="">
            </div>
            <div class="info">
              <h3>{{paginationItem.userName}}<span>LV.{{paginationItem.userLevel}}</span></h3>
              <h4>{{paginationItem.cmtTime}}</h4>
              <div class="com-cont">{{paginationItem.cmtText}}</div>
            </div>
          </div>
        </template>
      </paginationContent>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
import paginationContent from 'components/common/paginationContent'
import { scrollIt } from '@/utils/scrollIt'
import { hasUserMixin } from '@/utils/mixin'
export default {
  name: 'strategyCmt',
  components: {
    paginationContent
  },
  data () {
    return {
      query: {
        limit: 10,
        page: 1
      },
      errMsg: '',
      strategyCommentList: [],
      total: 0,
      cmtText: '说点什么吧...',
      defalutCmtImg: 'https://n3-q.mafengwo.net/s12/M00/35/6C/wKgED1uqIpCARLIhAAAZUeRPlFM676.png?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F100 '
    }
  },
  computed: {
    cmtImg () {
      return this.defalutCmtImg
    }
  },
  methods: {
    fetchPageApi () {
      this.getStrategyCommentData().then(() => {
        this.$nextTick(() => {
          scrollIt(this.getElementToPageTop(this.$refs.cmtWrap) - 20)
        })
      })
    },
    getElementToPageTop (el) {
      if (el.parentElement) {
        return this.getElementToPageTop(el.parentElement) + el.offsetTop
      }
      return el.offsetTop
    },
    getStrategyCommentData () {
      return new Promise((resolve, reject) => {
        api.getStrategyCommentInfo({
          query: this.query,
          strategyInfo: this.$route.params
        }).then(res => {
          console.log(res)
          this.total = res.total
          this.strategyCommentList = res.strategyCommentList
          return resolve(res)
        })
      })
    },
    judgeErrMsg () {
      let len = this.cmtText.length
      if (len === 0) {
        this.errMsg = '评论不能为空'
        return false
      }
      if (len > 200) {
        this.errMsg = '评论字数不能为200个'
        return false
      }
      return true
    },
    addCmt () {
      this.judgeUser()
      if (this.hasUserInfo) {
        if (this.judgeErrMsg()) {
          api.postAddStrategtCmt({
            cmtInfo: {
              userImg: this.userInfo.userImg,
              userName: this.userInfo.userName,
              userLevel: this.userInfo.level,
              cmtText: this.cmtText
            }
          }).then(res => {
            console.log(res)
            this.getStrategyCommentData()
            this.cmtText = '说点什么吧...'
            this.errMsg = ''
          })
        }
      }
    }
  },
  created () {
    this.getStrategyCommentData()
  },
  mixins: [hasUserMixin]
}
</script>

<style scoped lang='stylus'>
.strategy-cmt
  margin-top 85px
  overflow hidden
  .com-form
    .img
      overflow hidden
      width 48px
      height 48px
      border-radius 50%
      float left
      img
        width 100%
        display block
    .fm-tare
      float right
      width 615px
      position relative
      textarea
        border 1px solid $theme_color
        height 55px
        width 585px
        padding 14px
        resize none
        outline 0
        border-radius 5px
        float right
        font-size 14px
        color #666
        overflow auto
      .err-msg
        float left
        margin 20px 0
        color #ff3c00
        font-size 12px
      button
        background $theme_color
        color #fff
        width 114px
        height 30px
        border 0
        outline 0
        cursor pointer
        display block
        float right
        margin 20px 0
        border-radius 5px
        font-size 16px
        text-align center
        padding 0
        line-height 30px
  .com-box
    border-top 1px solid #e5e5e5
    h2
      font-size 24px
      color #333
      font-weight normal
      line-height 24px
      margin 36px 0
    .comment-item
      border-bottom 1px solid #e5e5e5
      padding 30px 0
      .img
        overflow hidden
        width 48px
        height 48px
        border-radius 50%
        float left
        img
          width 100%
          display block
      .info
        float left
        margin-left 16px
        width 615px
        position relative
        h3
          font-size 18px
          color #333
          font-weight normal
          line-height 28px
          span
            color #eb5443
            font-size 12px
            font-weight bold
            margin-left 10px
        h4
          font-size 12px
          color #999
          font-weight normal
          line-height 14px
        .com-cont
          font-size 14px
          color #666
          line-height 28px
          margin-top 8px
</style>
