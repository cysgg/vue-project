<template>
  <div class="ft-safety">
    <router-link to="" tag="a" class="s-a"></router-link>
    <router-link to="" tag="a" class="s-b"></router-link>
    <router-link to="" tag="a" class="s-c"></router-link>
    <router-link to="" tag="a" class="s-d"></router-link>
  </div>
</template>

<script>
export default {
  name: 'footerSafety'
}
</script>

<style scoped lang="stylus">
.ft-safety
  text-align center
  a
    display inline-block
    margin-left 10px
    width 90px
    height 30px
    background url('../../assets/images/mfw_logo4.png') no-repeat 0 -70px
    overflow hidden
  .s-b
    background-position 0 -110px
  .s-c
    background url('../../assets/images/mfw_safety.png')
  .s-d
    background url('../../assets/images/mfw_renzheng.png')
</style>
