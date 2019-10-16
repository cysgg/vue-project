<template>
  <div>
    <!-- 遍历传过来需要展示的数组，将需要展示的每一项传出 -->
    <div
      class="pg-item"
      v-for="(item, index) in paginationList"
      :key="index"
    >
    <!-- 具名插槽 itemContetn 传出的值为名为travelnote -->
      <slot name="itemContent" :travelnote="item"></slot>
    </div>
    <div class="pagination">
      <span class="count">共{{pageSum}}页/{{total}}条</span>
      <span
        v-if="currIndex !== 1"
        class="pg-span pg-prev"
        @click="prev"
      >上一页</span>
      <span
        v-for="(item, index) in piList"
        :key="index"
        class="pg-span"
        :class="item === currIndex ? 'pg-current' : 'pi'"
        @click="curr(item)"
      >
        {{item}}
      </span>
      <span
        v-if="currIndex !== pageSum"
        class="pg-span pg-next"
        @click="next"
        >下一页</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'paginationContent',
  props: {
    paginationList: {
      type: Array
    },
    total: {
      type: Number,
      validator: this.upzero
    },
    page: {
      type: Number,
      validator: this.upzero
    },
    limit: {
      type: Number,
      validator: this.upzero,
      default: 10
    },
    paginationLength: {
      type: Number,
      validator: this.upzero,
      default: 9
    }
  },
  data () {
    return {
      currIndex: 1
    }
  },
  computed: {
    pageSum () {
      if (!this.total || !this.limit) {
        return 0
      }
      return Math.ceil(this.total / this.limit)
    },
    piList () {
      let pages = this.pageSum
      let curr = this.currIndex
      let length = this.paginationLength
      let halfLen = Math.floor(this.paginationLength / 2) > 0 ? Math.floor(this.paginationLength / 2) : 1
      let start = 1
      if (pages <= this.paginationLength) {
        length = pages
      } else {
        if (curr > halfLen && curr < pages - halfLen) {
          start = curr - halfLen
        } else if (curr >= pages - halfLen) {
          start = pages - this.paginationLength + 1
        }
      }
      return Array.from({length}, (v, i) => i + start)
    }
  },
  methods: {
    upzero: v => v >= 0,
    curr (val) {
      if (this.currIndex === val) {
        return
      }
      this.currIndex = val
      this.fetchNewList()
    },
    prev () {
      // 因为第一页的时候，上一页已经不显示了，这里就不用判断了
      this.currIndex--
      this.fetchNewList()
    },
    next () {
      // 因为最后一页的时候，下一页已经不显示了，这里就不用判断了
      this.currIndex++
      this.fetchNewList()
    },
    fetchNewList () {
      this.$emit('update:page', this.currIndex)
      this.$emit('fetchList', this.currIndex)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~style/common.styl'
.pagination
  padding 20px 0 20px 5px
  line-height 24px
  text-align right
  font-size 12px
  color #999
  .count
    padding-right 12px
    line-height 24px
    text-align right
    font-size 12px
    color #999
  .pg-span
    cursor pointer
    display inline-block
    margin-right 5px
    padding 0 5px
    border-radius 4px
    color #fff
    vertical-align middle
    background-color $theme_color
  .pg-current
    padding 0 7px
  .pi
    margin-right 1px
    margin-left 1px
    padding 0 7px
    border 0 none
    background 0
    color #666
    &:hover
      background-color #efefef
      border 0 none
      color #666
</style>
