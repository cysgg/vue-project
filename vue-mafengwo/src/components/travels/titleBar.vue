<template>
  <div class="title_bar clearfix">
    <div class="vt_center" v-if="travelNoteInfo.userInfo">
      <div class="ding">
        <span @click="addCount" class="up_act" title="顶">顶</span>
        <div class="num">{{travelNoteInfo.likeCount}}</div>
      </div>
      <div class="person">
        <div class="per_pic">
          <img v-lazy="travelNoteInfo.userInfo.img" width="120" height="120" alt="">
        </div>
        <i class="i-fengshou"></i>
        <div class="user-info">
          <span class="name">{{travelNoteInfo.userInfo.name}}</span>
          (<span class="addr">{{travelNoteInfo.userInfo.addr}}</span>)
        </div>
        <div class="per_grade">LV.{{travelNoteInfo.userInfo.level}}</div>
        <div class="vc_time">
          <span class="time">{{travelNoteInfo.time}}</span>
          <span>
            <i class="ico_view"></i>
            {{travelNoteInfo.visitTotal | getNumFixed}}w/{{travelNoteInfo.visitingCount}}
          </span>
        </div>
      </div>
      <div class="share_bar">
        <div class="bs_share">
          <i></i>
          <span>{{travelNoteInfo.shareCount}}分享</span>
        </div>
        <div class="bs_collect">
          <i></i>
          <span>{{travelNoteInfo.CollectionCount}}收藏</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNumFixed } from '@/utils/filter'
import { hasUserMixin } from '@/utils/mixin'
export default {
  name: 'titleBar',
  inject: {
    travelNoteInfo: {
      default: null
    }
  },
  filters: {
    getNumFixed
  },
  methods: {
    addCount () {
      this.judgeUser()
      if (this.hasUserInfo) {
        if (!this.travelNoteInfo.hasLiked) {
          this.$emit('addCount')
        }
      }
    }
  },
  mixins: [hasUserMixin]
}
</script>

<style scoped lang='stylus'>
.title_bar
  height 80px
  position relative
  z-index 16
  border-bottom 1px solid #d7d7d7
  box-shadow 0 2px 0 rgba(0, 0, 0, 0.05)
  .vt_center
    width 1000px
    margin 0 auto
    .ding
      position absolute
      right 50%
      top -77px
      margin-right -475px
      color #fff
      z-index 4
      width 70px
      text-align center
      span
        cursor pointer
        width 37px
        height 33px
        display inline-block
        margin-bottom 5px
        text-align center
        line-height 32px
        font-size 18px
        color #fff
        text-shadow 1px 0 1px #fcaf54
        background url(../../assets/images/sprite_v35.png) -293px -236px no-repeat
      .num
        font-size 14px
        font-weight bold
        font-family Verdana,Arial,Helvetica,STHeiti
        line-height 17px
    .person
      width 480px
      padding 20px 0 0 150px
      float left
      position relative
      .per_pic
        width 120px
        height 120px
        position absolute
        top -80px
        left 0
        z-index 88
        border-radius 50%
        overflow hidden
        margin-right 5px
      .i-fengshou
        position absolute
        z-index 100
        width 44px
        height 44px
        left 80px
        top 6px
        background url(../../assets/images/notes-medal3.png) 0 0 no-repeat
        margin-right 5px
      .user-info
        color #ff7200
        font-size 14px
        display inline-block
        margin-right 5px
      .per_grade
        color #ea3c1a
        font-size 10px
        font-weight bold
        font-family Verdana,Arial,Helvetica,STHeiti
        display inline-block
        margin-right 5px
      .vc_time
        color #acacac
        display inline
        margin-left 10px
        span
          font-family Verdana,Arial,Helvetica,STHeiti
          display inline-block
          margin-right 10px
          .ico_view
            display inline-block
            width 18px
            height 14px
            margin-right 4px
            vertical-align -2px
            background url(../../assets/images/sprite_v35.png) -51px -327px no-repeat
    .share_bar
      float right
      width 245px
      .bs_share,
      .bs_collect
        width 120px
        height 65px
        padding-top 15px
        text-align center
        border-left 1px solid #e8e8e6
        display block
        font-size 14px
        line-height 24px
        color #666
        float right
        i
          display block
          margin 0 auto 7px
          width 25px
          height 24px
          background url(../../assets/images/sprite_v35.png) -240px -576px no-repeat
        span
          display inline-block
          width auto
      .bs_share
        border-right 1px solid #e8e8e6
        position relative
        z-index 10
        i
          background-position -269px -576px
</style>
