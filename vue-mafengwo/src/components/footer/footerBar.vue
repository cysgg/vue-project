<template>
  <div class="footer">
    <div class="ft-content">
      <footerInfo></footerInfo>
      <footerLinks></footerLinks>
      <footerCopyRight></footerCopyRight>
      <footerSafety></footerSafety>
    </div>
  </div>
</template>

<script>
import footerInfo from 'components/footer/footerInfo'
import footerLinks from 'components/footer/footerLinks'
import footerCopyRight from 'components/footer/footerCopyRight'
import footerSafety from 'components/footer/footerSafety'
export default {
  name: 'footerBar',
  components: {
    footerInfo,
    footerLinks,
    footerCopyRight,
    footerSafety
  }
}
</script>

<style scoped lang="stylus">
.footer
  clear both
  background-color #3c3c3c
  color #c2c2c2
  line-height 22px
  padding-bottom 20px
  font-size 12px
  overflow hidden
  .ft-content
    width 1105px
    margin 0 auto
    overflow hidden
</style>
