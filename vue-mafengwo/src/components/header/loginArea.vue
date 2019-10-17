<template>
  <div class="login-out">
    <span class="login_other_item weibo_item"></span>
    <span class="login_other_item qq_item"></span>
    <span class="login_other_item weixin_item"></span>
    <router-link to="/login" tag="a">登录</router-link>
    <span class="split">|</span>
    <router-link to="/register" tag="a">注册</router-link>
  </div>
</template>

<script>
export default {
  name: 'loginArea'
}
</script>

<style scoped lang="stylus">
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
