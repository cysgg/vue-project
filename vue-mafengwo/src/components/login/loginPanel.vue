<template>
  <div class="signup-forms">
    <div class="sign-box">
      <div class="inner clearfix">
        <div class="inner_v2_left">
          <div v-if="isFiald" class="alert">{{fialdMsg}}</div>
          <form key="loginForm" novalidate="true" v-if="islogin" method="post" autocomplete="off">
            <formField
              @checkVal="validateItem"
              v-model="loginQuery.name"
              tip="你的邮箱/手机号"
              iname="name">
            </formField>
            <formField
              @checkVal="validateItem"
              v-model="loginQuery.password"
              tip="你的密码" type="password"
              iname="password">
            </formField>
            <div class="submit-btn">
              <button :disabled="fetchIng" @click.prevent="submitForm('login')">登 录</button>
            </div>
          </form>
          <form key="registerForm" novalidate="true" @submit.prevent v-else method="post">
            <formField
              @checkVal="validateItem"
              v-model="registerQuery.phoneNum"
              tip="你的手机号码"
              iname="phoneNum">
            </formField>
            <div class="submit-btn">
              <button @click.prevent="submitForm('register')">立即注册</button>
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
        <span @click="chTypeForm">{{tip.link}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
import formField from 'components/login/formField'
export default {
  name: 'loginPanel',
  components: {
    formField
  },
  data () {
    return {
      fetchIng: false,
      fialdMsg: '',
      isFiald: false,
      islogin: true,
      mfwappImg: 'https://images.mafengwo.net/mobile/images/omc/login-omc/code.jpg',
      tips: [{
        sp: '还没有帐号?',
        link: '马上注册'
      }, {
        sp: '已经注册?',
        link: '马上登录'
      }],
      loginQuery: {
        name: '',
        password: ''
      },
      registerQuery: {
        phoneNum: ''
      },
      rules: {
        name: {
          required: true,
          maxlength: 20
        },
        password: {
          required: true,
          maxlength: 20
        },
        phoneNum: {
          required: true,
          maxlength: 20
        }
      },
      messages: {
        name: {
          required: '*必填',
          maxlength: '*最多20个字符'
        },
        password: {
          required: '*必填',
          maxlength: '*最多20个字符'
        },
        phoneNum: {
          required: '*必填',
          maxlength: '*最多20个字符'
        }
      },
      errMsg: {
        name: '',
        password: '',
        phoneNum: ''
      }
    }
  },
  provide () {
    return {
      errMsg: this.errMsg
    }
  },
  methods: {
    chTypeForm (val) {
      this.fialdMsg = ''
      this.isFiald = false
      if (typeof val === 'boolean') {
        this.islogin = val
      } else {
        this.islogin = !this.islogin
      }
    },
    loginUp () {
      this.fetchIng = true
      let query = this.islogin ? this.loginQuery : this.registerQuery
      api.postLoginInfo(query).then(res => {
        console.log(res)
        if (res.logined) {
          this.fialdMsg = ''
          this.isFiald = false
          this.$store.dispatch('login/getUserInfo', res.userInfo)
          this.$store.dispatch('login/getLoginToken', res.token)
          this.$router.push({name: 'home'})
        } else {
          this.fialdMsg = res.msg
          this.isFiald = true
        }
        this.fetchIng = false
      })
    },
    submitForm (formName) {
      console.log(formName)
      let formQuery = this.loginQuery
      if (formName === 'register') {
        formQuery = this.registerQuery
      }
      if (this.validate(formQuery)) {
        console.log('验证成功')
        this.loginUp()
      }
    },
    errMsgCheck (k, v, t) { // 字段名， 出错类型， 该类型是否出错
      if (!v) {
        this.errMsg[k] = this.messages[k][t]
      } else {
        this.errMsg[k] = ''
      }
    },
    validateItem (key) {
      let itemVal = key in this.loginQuery ? this.loginQuery : this.registerQuery
      this.validateRules(itemVal[key], key)
    },
    validateRules (data, key) {
      let val = true
      let errType
      for (let keyRule of Object.getOwnPropertyNames(this.rules[key])) {
        if (!this.validateRule(data, keyRule, this.rules[key][keyRule])) {
          val = false
          errType = keyRule
          break
        }
      }
      this.errMsgCheck(key, val, errType)
      return val
    },
    validate (data, callback = function () {}) {
      let status = true
      for (let key in data) {
        if (!this.validateRules(data[key], key)) {
          status = false
        }
      }
      return status
    },
    validateRule (val, type, typeRule) {
      if (type === 'required') {
        return typeRule ? val !== '' : true
      } else if (type === 'maxlength') {
        return val.length < parseInt(typeRule, 10)
      } else if (type === 'maxlength') {
        return val.length < parseInt(typeRule, 10)
      } else {
        return true
      }
    }
  },
  created () {
    this.chTypeForm(this.$route.name === 'login')
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
        .alert
          width 300px
          margin 0 auto
          color #a94442
          background-color #f2dede
          border-color #ebccd1
          padding 6px 10px
          border 1px solid transparent
          border-radius 4px
          text-align left
        .submit-btn
          width 320px
          margin 24px auto 0
          padding 12px 0 0
          button
            width 320px
            height 42px
            border 0
            outline none
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
