<template>
  <div @mouseleave="currIndex = -1">
    <div
      class="drop-item"
      v-for="(item, index) in lyglMddList"
      :key="index"
      @mouseover="currIndex = index"
      :class="{'drop-open': currIndex === index}"
    >
      <div class="trigger">
        <i></i>
        {{item.type}}
      </div>
    </div>
    <dropPop class="drop-pop" v-if="currIndex > -1" :dropList="dropList"></dropPop>
  </div>
</template>

<script>
import dropPop from 'components/lygl/dropPop'
import { mapGetters } from 'vuex'
export default {
  name: 'navDrop',
  data () {
    return {
      currIndex: -1
    }
  },
  computed: {
    ...mapGetters('lygl', ['lyglMddList']),
    dropList () {
      if (this.currIndex > -1) {
        return this.lyglMddList[this.currIndex].mapList
      }
      return []
    }
  },
  components: {
    dropPop
  },
  created () {
    this.$store.dispatch('lygl/getLyglMddList')
  }
}
</script>

<style scoped lang='stylus'>
.drop-item+.drop-item
  margin-left 20px
  &:before
    content ''
    position absolute
    margin 16px 0 0 -10px
    width 1px
    height 13px
    background-color #eee
.drop-open
  float left
  width 40px
  font-size 14px
  .trigger
    color $theme_color
    border-bottom 3px solid $theme_color
    i
      border-top-color $theme_color
.drop-item
  float left
  width 40px
  font-size 14px
  .trigger
    padding 10px 0
    height 22px
    cursor pointer
    i
      float right
      margin-top 10px
      border-top 4px solid #999
      border-left 4px dashed transparent
      border-right 4px dashed transparent
      font-size 0
      overflow hidden
.drop-pop
  position absolute
  margin-top 40px
  width 410px
  padding 20px
  background-color #fff
  border 1px solid #e5e5e5
  line-height 30px
  z-index 1
</style>
