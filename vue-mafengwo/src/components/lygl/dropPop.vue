<template>
  <div>
    <div class="inner">
      <div class="ul">
        <div
          v-for="(item, index) in dropList"
          :key="index"
          class="li"
        >
          <router-link :to="'lyglItem/'+item.name" tag="a">{{item.name}}({{item.num}})</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropPop',
  props: {
    dropList: {
      type: Array
    }
  }
}
</script>

<style scoped lang='stylus'>
.inner
  overflow hidden
  .ul
    margin-left -15px
  .li
    float left
    margin 0 15px
    &:before
      content ''
      float left
      margin 8px 0 0 -15px
      width 1px
      height 13px
      background-color #eee
    a
      color #333
      font-size 14px
      &:hover
        color $theme_color
</style>
