<template>
  <div>
    <div
      class="select-trigger"
      @click.stop="showOptions = true"
      >
      <span>{{defaultNums}}{{defaultType}}</span>
      <div class="caret">
        <i></i>
      </div>
    </div>
    <ul
      class="select-ul"
      v-show="showOptions"
      >
      <li
        v-for="li in optionsList"
        :key="li"
        @click="selectOption(li)"
      >{{li}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'selectPanel',
  props: {
    defaultNums: {
      type: Number,
      default: 2
    },
    defaultType: {
      type: String,
      default: '成人'
    },
    optionsList: {
      type: Array
    }
  },
  data () {
    return {
      showOptions: false,
      bindhideOptions: null
    }
  },
  methods: {
    selectOption (val) {
      this.$emit('update:defaultNums', val)
      this.showOptions = false
    },
    hideOptions () {
      this.showOptions = false
    }
  },
  mounted () {
    this.bindhideOptions = this.hideOptions.bind(this)
    this.$parent.$el.addEventListener('click', this.bindhideOptions, false)
  },
  beforeDestroy () {
    this.$parent.$el.removeEventListener('click', this.bindhideOptions, false)
  }
}
</script>

<style scoped lang='stylus'>
.select-trigger
  padding 0 8px
  border 1px solid #c6c6c6
  border-radius 4px
  cursor pointer
  span
    user-select none
  .caret
    float right
    width 15px
    height 18px
    margin-top 4px
    border-left 1px solid #c6c6c6
    line-height 0
    text-align right
    i
      border-top 4px solid #999
      border-left 4px dashed transparent
      border-right 4px dashed transparent
      font-size 0
      line-height 0
      overflow hidden
      vertical-align -7px
.select-ul
  margin-top 0
  display block
  position absolute
  left 0
  right 0
  z-index 10
  border 1px solid #c6c6c6
  border-radius 4px
  box-shadow 1px 1px 3px rgba(0, 0, 0, .1)
  background-color #fff
  transition all .2s
  li
    padding 0 15px
    cursor pointer
    &:hover
      background-color #f4f4f4
</style>
