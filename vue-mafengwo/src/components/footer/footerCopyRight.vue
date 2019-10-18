<template>
  <div class="ft-copyright">
    <router-link to="" tag="a">
      <i class="ft-mfw-logo"></i>
    </router-link>
    <p>
      © 2019 Mafengwo.cn
      <router-link to="" tag="a">京ICP备11015476号</router-link>
      <router-link to="" tag="a">
        <img src="https://images.mafengwo.net/images/footer/police_record.png" width="12" style="margin:0 2px 4px 0" alt="">
        京公网安备11010502013401号
      </router-link>
      <router-link to="" tag="a">京ICP证110318号</router-link>
      <span class="m_1_10">违法和不良信息举报电话: 010-83416877 举报邮箱:mfwjubao@mafengwo.com</span>
    </p>
    <p>
      <router-link class="m_l_10" to="" tag="a">
        网络出版服务许可证
      </router-link>
      <router-link class="m_l_10" to="" tag="a">
        增值电信业务经营许可证
      </router-link>
      <router-link class="m_l_10" to="" tag="a">
        营业执照
      </router-link>
      <router-link class="m_l_10" to="" tag="a">
        广播电视节目制作经营许可证
      </router-link>
      <router-link class="m_l_10" to="" tag="a">
        帮助中心
      </router-link>
      <span class="m_1_10">马蜂窝客服：国内</span>
      <span class="highlight">4006-345-678</span>
      <span class="m_1_10">海外</span>
      <span class="highlight">+86-10-8341-6888</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'footerCopyRight'
}
</script>

<style scoped lang="stylus">
.ft-copyright
  padding 12px 0 12px 7px
  margin-top -1px
  border-top 1px solid #575a5b
  a
    color #c2c2c2
    &:hover
      color #fff
  .ft-mfw-logo
    float left
    margin 2px 20px 0 0
    width 136px
    height 39px
    background url('../../assets/images/mfw_logo4.png') no-repeat 0 -30px
    overflow hidden
  .m_1_10
    margin-left 10px
  .highlight
    color $theme_color !important
</style>
