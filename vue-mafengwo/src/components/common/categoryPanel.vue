<template>
  <div class="category-panel">
    <div
      class="dl"
      v-for="(category, index) in categoryList"
      :key="index"
    >
      <div class="dt">{{category.sub_title}}</div>
      <div
        class="dd"
        v-for="dd in category.sub_dh_list"
        :key="dd"
      >
      <router-link to="" tag="a">{{dd}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'categoryPanel',
  props: {
    categoryList: {
      type: Array
    }
  }
}
</script>

<style scoped lang='stylus'>
.category-panel
  width 490px
  padding 10px 0
  height 318px
  position absolute
  left 258px
  top -1px
  border 1px solid #ddd
  background-color #fff
  box-shadow 0 3px 2px rgba(0, 0, 0, .1)
  .dl
    margin 0 0 0 20px
    padding-left 60px
    boder 0
    font-size 12px
    line-height 20px
    display block
    overflow hidden
    .dt
      float left
      display inline
      width 60px
      height 20px
      background none
      margin 5px 0 5px -60px
      white-space nowrap
      overflow hidden
      line-height 20px
      font-size 12px
      cursor default
      color #666
      font-weight bold
      position relative
    .dd
      display inline
      position static
      border 0
      padding 0
      float left
      margin 5px 15px 5px 0
      height 20px
      overflow hidden
      white-space nowrap
      line-height 20px
      background-color #fff
      top -1px
      z-index 98
      a
        color #999
        &:hover
          color $theme_color
</style>
