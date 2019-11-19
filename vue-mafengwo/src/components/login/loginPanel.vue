<template>
  <div class="signup-forms">
    <div class="sign-box">
      <div class="inner clearfix">
        <div class="inner_v2_left">
          <form method="post">
            <formField tip="你的邮箱/手机号"></formField>
            <formField tip="你的密码" type="password"></formField>
            <div class="submit-btn">
              <button>登 录</button>
            </div>
          </form>
          <div class="connect">
            <p class="hd">用合作网站账户直接登录</p>
            <div class="bd">
              <span href="/weibo" class="weibo"><i></i>新浪微博</span>
              <span href="/qq" class="qq"><i></i>QQ</span>
              <span href="/wechat" class="weixin"><i></i>微信</span>
              <div class="clear"></div>
          </div>
          </div>
        </div>
        <div class="inner_v2_right">
          <img v-lazy="mfwappImg" alt="">
          <p>扫一扫<br>下载马蜂窝APP</p>
        </div>
      </div>
      <div class="bottom-link">
        {{tip.sp}}
        <span @click="islogin = !islogin">{{tip.link}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import formField from 'components/login/formField'
export default {
  name: 'loginPanel',
  components: {
    formField
  },
  data () {
    return {
      islogin: true,
      mfwappImg: 'https://images.mafengwo.net/mobile/images/omc/login-omc/code.jpg',
      tips: [{
        sp: '还没有帐号?',
        link: '马上注册'
      }, {
        sp: '已经注册?',
        link: '马上登录'
      }]
    }
  },
  computed: {
    tip () {
      if (this.islogin) {
        return this.tips[0]
      }
      return this.tips[1]
    }
  }
}
</script>

<style scoped lang='stylus'>
.signup-forms
  position relative
  .sign-box
    position absolute
    top 0
    left 0
    z-index 10
    display block
    .inner
      width 600px
      padding-top 26px
      background-color #fff
      border-radius 5px
      box-shadow 0 3px 3px rgba(0, 0, 0, .4)
      .inner_v2_left
        float left
        width 370px
        .submit-btn
          width 320px
          margin 24px auto 0
          padding 12px 0 0
          button
            width 320px
            height 42px
            border 0
            background-color #ffa800
            border-radius 5px
            text-align center
            line-height 40px
            color #fff
            font-size 18px
            font-weight bold
            cursor pointer
        .connect
          clear both
          overflow hidden
          margin-top 30px
          .hd
            padding 15px 0 20px 24px
            font-size 12px
            color #999
            border-top 1px solid #ebebeb
          .bd
            padding 0 0 0 25px
            width 348px
            height 84px
            overflow hidden
            span
              width 58px
              height 84px
              text-align center
              font-size 12px
              color #999
              display inline-block
              margin-right 25px
              &.weibo i
                background-position 0 0
              &.qq i
                background-position -42px 0
              &.weixin i
                background-position -294px 0
              i
                width 42px
                height 42px
                background url(../../assets/images/c_icon3.gif) no-repeat
                display block
                margin 0 0 4px 10px
                cursor pointer
      .inner_v2_right
        float right
        border-left 1px solid #ebebeb
        width 208px
        padding-left 20px
        height 300px
        padding-top 20px
        img
          width 180px
          height 180px
        p
          font-size 15px
          color #797979
          line-height 24px
          margin-top 20px
          text-align center
          width 180px
    .bottom-link
      width 140px
      margin 10px auto
      background-color #000
      border-radius 15px
      background-color rgba(0,0,0,.4)
      text-align center
      font-size 12px
      color #fff
      padding 4px 0
      text-shadow 1px 1px 1px rgba(0,0,0,.4)
      span
        margin-left 6px
        color $theme_color
        cursor pointer
</style>
