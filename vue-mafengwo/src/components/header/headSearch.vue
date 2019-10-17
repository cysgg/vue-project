<template>
  <div class="head-search">
    <div class="head-search-wrap"
      :class="{'head-search-focus': focus}"
    >
      <div class="head-searchform">
        <input type="text" @focus="focus = true" @blur="focus = false" v-model="searchWord">
        <router-link role="button" tag="a" to="" class="icon-search" @click.native="toSearch"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headSearch',
  data () {
    return {
      focus: false,
      searchWord: ''
    }
  },
  methods: {
    toSearch () {
      if (this.searchWord) {
        this.$emit('search', this.searchWord)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.head-search
  height 58px
  float left
  width 130px
  position relative
  .head-search-wrap
    background none
    background-color #fff
    border 0 none
    padding 14px 0 14px 16px
    height 30px
    position absolute
    right 0
    top 0
    width 130px
    transition width .5s ease 0s
    .head-searchform
      height 30px
      position relative
      input
        height 28px
        line-height 28px
        border 1px solid #efefef
        background-color #efefef
        width 108px
        padding 0 10px
        font-size 14px
        color #666
        border-radius 4px
        transition width .5s ease 0s
      .icon-search
        position absolute
        top 5px
        right 5px
        width 20px
        height 20px
        background-image url('../../assets/images/mfw_logo.png')
        background-position -30px -110px
        overflow hidden
  .head-search-focus
    width 382px
    .head-searchform
      input
        width: 360px;
        border-color $theme_color
        box-shadow 0 0 3px rgba(255, 157, 0, .5)
        background-color #fff
      .icon-search
        background-position -30px -140px
</style>
