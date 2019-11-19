<template>
  <div>
    <div class="wrapper clearfix">
      <div class="container">
        <router-link class="logo" :to="{name: 'home'}"></router-link>
        <loginPanel></loginPanel>
      </div>
    </div>
    <div class="photoby">
      &lt;&nbsp;
      <span>
        {{bgInfo.title}}
      </span>
      &gt;&nbsp;
      <span>
        {{bgInfo.userName}}
      </span>
    </div>
    <div class="bg" ref="bg"></div>
  </div>
</template>

<script>
import loginPanel from 'components/login/loginPanel'
import api from '@/api/index'
export default {
  name: 'loginAndRegister',
  components: {
    loginPanel
  },
  data () {
    return {
      bgInfo: {}
    }
  },
  created () {
    api.getBgInfo().then(res => {
      console.log(res)
      this.bgInfo = res.bgInfo
      this.$refs.bg.style.backgroundImage = `url(${res.bgInfo.bgImg})`
    })
  }
}
</script>

<style scoped lang='stylus'>
.wrapper
  position absolute
  top 50%
  left 50%
  margin -245px 0 0 -490px
  z-index 2
  color #666
  width 980px
  .container
    width 600px
    margin -30px auto 0
    a.logo
      width 75px
      height 90px
      display block
      text-indent -999px
      overflow hidden
      margin 0 auto
      background url(../assets/images/logo_new.png) no-repeat
.bg
  background-position 50% 50%
  background-size cover
  bottom 0
  right 0
  position fixed
  overflow hidden
  left 0
  top 0
  &:before
    background url(/images/signup/full_page_vignette.png) 0 0 rgba(0,0,0,0.2)
    background-size 100%
    bottom 0
    content ""
    left 0
    opacity .5
    position fixed
    right 0
    top 0
  &:after
    bottom 0
    content ""
    left 0
    position fixed
    right 0
    top 0
.photoby
  position absolute
  bottom 10px
  right 10px
  font-size 12px
  color #fff
  line-height 2em
  z-index 3
  span
    color #fff
</style>
