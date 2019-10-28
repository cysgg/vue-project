<template>
  <div class="nav-panel">
    <ol>
      <li
        v-for="(item, index) in panelList"
        :key="index"
        :class="{'top3': index < 3}"
        >
        <em class="rank-num">{{index + 1}}</em>
        <strong><router-link to="" tag="a">{{item.item_mdd}}</router-link></strong>
        <router-link to="" tag="a">{{item.item_dec}}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'navPanel',
  props: {
    panelList: {
      type: Array
    }
  }
}
</script>

<style scoped lang='stylus'>
.nav-panel
  position absolute
  left 258px
  top -1px
  width 350px
  height 338px
  border 1px solid #ddd
  background-color #fff
  box-shadow 0 3px 2px rgba(0, 0, 0, .1)
  a
    color #999
  ol
    position absolute
    z-index 2
    padding 15px 10px
    // width 280px
    line-height 30%
    li
      height 30px
      line-height 30px
      overflow hidden
      .rank-num
        float left
        width 30px
        font-size 20px
        text-align right
        color #aaa
        font-weight bold
        font-family: Letter Gothic Std, Verdana, Geneva, sans-serif;
      strong
        padding 0 15px
        font-size 14px
        font-weight normal
        color #666
        a
          color #666
          &:hover
            color $theme_color
    .top3
      .rank-num
        color $theme_color
      strong
        a
          color $theme_color
a:hover
  color $theme_color
</style>
