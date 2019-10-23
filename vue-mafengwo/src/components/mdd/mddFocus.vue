<template>
  <div class="mdd-focus">
    <div v-if="focusInfo" class="show-banner show-info-notes">
      <div class="cover">
        <router-link to="" tag="a" class="bigimg">
          <img v-lazy="focusInfo.imgUrl" alt="">
        </router-link>
      </div>
      <div class="show-info show-info-sm">
        <div class="show-name">
          <h2>{{focusInfo.title}}</h2>
        </div>
        <p class="location">
          {{focusInfo.text}}
        </p>
        <div class="show-links">
          <router-link to="" tag="a">阅读全文</router-link>
        </div>
      </div>
      <div class="show-shadow"></div>
      <div class="show-ft">
        <div class="show-ft-item">
          <i class="tips"></i>
          <div class="pic-from-pop">
            <span>
              <router-link to="" tag="a">{{focusInfo.author}}</router-link>的作品
            </span>
            <em></em>
          </div>
        </div>
        <span class="show-ft-item">
          <router-link to="" tag="a" class="show-icon-calendar">
            {{focusInfo.date | formatDay}}
          </router-link>
        </span>
        <div class="show-ft-item pic-share">
          <span class="btn-share">
            <i></i>
            分享
          </span>
          <div class="pop-share">
            <i class="s-weibo"><i></i></i>
            <i class="s-qzone"><i></i></i>
            <i class="s-weixin"><i></i></i>
          </div>
        </div>
      </div>
      <router-link to="" class="show-arrdown"></router-link>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
import { formatDay } from '@/utils/filter'
export default {
  name: 'mddFocus',
  data () {
    return {
      focusInfo: null
    }
  },
  created () {
    api.getFocusInfo().then(res => {
      console.log(res)
      this.focusInfo = res.focusInfo
    })
  },
  filters: {
    formatDay
  }
}
</script>

<style scoped lang="stylus">
.mdd-focus
  position relative
  width 100%
  min-width 1140px
  height calc(100vw / 2.45)
  min-height 680px
  overflow hidden
  .bigimg
    display block
    width 100%
    height 100%
    overflow hidden
    position relative
    img
      width 100%
      height 100%
      margin 0
  .show-banner
    position relative
    width 100%
    height 100%
    overflow hidden
    .show-info,
    .show-ft,
    .show-arrdown
      z-index 1
    .show-shadow
      position absolute
      left 0
      bottom 0
      right 0
      padding 12px 20px 0
      height 80px
      line-height 56px
      font-size 24px
      font-weight normal
      transition opacity .5s ease 0s
    .show-ft
      position absolute
      right 40px
      bottom 20px
      .show-ft-item
        position relative
        float left
        margin-left 15px
        &:hover .pic-from-pop
          visibility visible
          width 128px
        .tips
          display inline-block
          width 25px
          height 25px
          background url('../../assets/images/place-sprites3.png') no-repeat 0 0
          overflow hidden
        .pic-from-pop
          width 0
          position absolute
          right 25px
          top 0
          white-space nowrap
          color #333
          overflow hidden
          transition width .5s ease 0s
          span
            display inline-block
            margin-right 5px
            background-color rgba(255,255,255,.9)
            border-radius 4px
            line-height 25px
            height 25px
            padding 0 10px
            color #333
            a
              color #333
              &:hover
                color $theme_color
          em
            position absolute
            right 4px
            top 8px
            border-left 4px solid #fff
            border-top 4px dashed transparent
            border-bottom 4px dashed transparent
            overflow hidden
            line-height 0
            font-size 0
        .show-icon-calendar
          display inline-block
          width 25px
          height 25px
          color #fff
          line-height 32px
          text-align center
          background url('../../assets/images/place-sprites3.png') no-repeat -60px 0
          overflow hidden
    .pic-share
      position relative
      &:hover .pop-share
        display block
      .btn-share
        display inline-block
        cursor pointer
        width 78px
        height 23px
        border 1px solid #fff
        border-radius 3px
        color #fff
        text-align center
        line-height 23px
        i
          display inline-block
          margin-right 5px
          width 13px
          height 14px
          background url('../../assets/images/place-sprites3.png') no-repeat 0 -30px
          vertical-align middle
      .pop-share
        display none
        position absolute
        right 0
        bottom 30px
        width 132px
        height 36px
        padding 8px 10px
        background-color #fff
        border-radius 6px
        box-shadow 0 1px 4px rgba(0, 0, 0, .3)
        i
          display inline-block
          float left
          width 36px
          height 36px
          border-radius 5px
          margin-right 12px
          text-align center
          i
            display inline-block
            margin-top 8px
            width 26px
            height 22px
            background url('../../assets/images/place-sprites3.png')
            vertical-align top
            overflow hidden
        .s-weibo
          background-color #d84c4c
          i
            margin 7px 0 0 5px
            height 23px
            background-position 0 -90px
        .s-qzone
          background-color #3f8bc0
          i
            margin 6px 0 0 4px
            height 23px
            background-position -30px -90px
        .s-weixin
          margin-right 0
          background-color #73a64f
          i
            margin 7px 0 0 5px
            background-position -60px -90px
    .show-arrdown
      position absolute
      bottom 24px
      left 50%
      margin-left -18px
      width 36px
      height 20px
      background url('../../assets/images/place-sprites3.png') no-repeat -30px -60px
      overflow hidden
  .show-info-notes
    .show-info-sm
      width 535px
      height 170px
      .show-name
        top 45px
        position static
        margin 10px 0
        font-size 40px
        line-height 1.3
        text-align left
        right 157px
        h2
          font-weight normal
          line-height inherit
          font-size 30px
          cursor pointer
      .location
        position static
        font-size 16px
        top 120px
        right 140px
      .show-links
        position static
        display inline-block
        margin-top 10px
        color #fff
        font-size 18px
        top 160px
        right 58px
        a
          color #fff
          text-decoration underline
          &:hover
            color $theme_color
    .show-info
      margin-top -120px
      padding-right 30px
      border-right 7px solid #fff
      text-shadow 0 2px 3px rgba(0, 0, 0, .5)
      color #fff
      font-size 16px
      line-height 1.8
      white-space normal
      text-align left
      h2:hover
        color $theme_color
  .show-info
    position absolute
    right 5%
    top 50%
</style>
