<template>
  <div class="navbar">
    <ul class="tn-nav">
      <li
        class="tn-nav-hot"
        :class="{'active': currItem === 'hot'}"
        @click="handleClick('hot')"
      >
        <a href="javascript:void(0);">
          热门游记
        </a>
        <span class="tn-menu" @click.stop="">
          <i class="tn-menu-icon"></i>
          筛选
        </span>
      </li>
      <li
        class="tn-nav-new"
        :class="{'active': currItem === 'new'}"
        @click="handleClick('new')"
      >
        <a href="javascript:void(0);">
          最新发表
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      currItem: 'hot'
    }
  },
  methods: {
    handleClick (val) {
      this.currItem = val
      this.$emit('navbarClick', val)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~style/common.styl'
.navbar
  margin-bottom 20px
  height 36px
  line-height 36px
  font-size 16px
  padding-bottom 8px
  border-bottom 1px solid #e4e4e4
  .tn-nav
    float left
    li
      float left
      display inline
      text-align center
      a
        color #333
        font-size 18px
        &:hover
          text-decoration none
          color $theme_color
      .tn-menu
        display inline-block
        margin-left 7px
        line-height 20px
        border 1px solid #e5e5e5
        color #666
        font-size 12px
        padding 0 10px 0 8px
        cursor pointer
        vertical-align 2px
        &:hover
          border-color $theme_color
          background-color $theme_color
          color #fff
          .tn-menu-icon
            background-position 0 -140px
        .tn-menu-icon
          display inline-block
          float left
          margin 6px 5px 0 0
          width 11px
          height 8px
          background url('../../assets/images/mfw_logo2.png') no-repeat 0 -130px
      &.active
        padding-bottom 6px
        border-bottom 3px solid $theme_color
        position relative
        z-index 11
        a
          color $theme_color
        i
          display inline-block
    .tn-nav-hot
      width 170px
    .tn-nav-new
      width 120px
</style>
