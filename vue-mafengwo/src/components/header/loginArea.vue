<template>
  <div>
    <div v-if="userInfo !== null" class="login-info">
      <div class="head-user">
        <router-link @click.native="exitAndLogin" to="" class="drop-trigg">
          <div class="user-image">
            <img v-lazy="userInfo.userImg" alt="" height="32" width="32">
          </div>
        </router-link>
        <div class="user-name">
          <span>{{userInfo.userName}}</span>
        </div>
        <div class="user-level">
          <span>LV.{{userInfo.level}}</span>
        </div>
        <div class="user-money">
          <span>金币 {{userInfo.money}}</span>
        </div>
      </div>
    </div>
    <div v-else class="login-out">
      <span class="login_other_item weibo_item"></span>
      <span class="login_other_item qq_item"></span>
      <span class="login_other_item weixin_item"></span>
      <router-link to="/login" tag="a">登录</router-link>
      <span class="split">|</span>
      <router-link to="/register" tag="a">注册</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'loginArea',
  computed: {
    ...mapGetters('login', ['userInfo'])
  },
  methods: {
    exitAndLogin () {
      this.$store.dispatch('login/clearUserInfo')
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped lang="stylus">
.login-info
  width auto
  float right
  .head-user
    display flex
    align-items center
    .drop-trigg
      color #666
      font-size 14px
      height 58px
      display inline-block
      padding-right 13px
      position relative
      cursor pointer
      .user-image
        margin-top 10px
        float left
        width 32px
        height 32px
        border-radius 50%
        overflow hidden
        border 2px solid #fff
        background-color white
    .user-name
      margin-top 10px
      span
        margin-left 10px
        font-size 14px
        color #666
        font-weight bold
    .user-level
      margin-top 10px
      span
        margin-left 10px
        font-size 14px
        color #ef523d
        font-weight bold
    .user-money
      margin-top 10px
      span
        margin-left 10px
        font-size 14px
        color $theme_color
        font-weight bold
.login-out
  padding 16px 0
  float right
  height 26px
  line-height 26px
  color #c9c9c9
  text-align right
  .login_other_item
    cursor pointer
    display inline-block
    width 26px
    height 26px
    margin-right 6px
    overflow hidden
    vertical-align -7px
    background-image url('../../assets/images/mfw_logo.png')
    &.weibo_item
      background-position 0 -50px
      &:hover
        background-position 0 -80px
    &.qq_item
      background-position -30px -50px
      &:hover
        background-position -30px -80px
    &.weixin_item
      background-position 0 -165px
      &:hover
        background-position -30px -165px
  a
    font-size 14px
    color $theme_color
  .split
    display inline-block
    margin 0 10px
    width 1px
    height 14px
    background-color #c9c9c9
    overflow hidden
    vertical-align -2px
</style>
