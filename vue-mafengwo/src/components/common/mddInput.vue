<template>
  <div class="mddInput">
    <input :value="inputValue" @input="inputHolder" type="text" @keyup="keyupHolder" @keydown="keydownHolder" @focus="focusHolder" @blur="blurHolder" :placeholder="placeholder" autocomplete="off">
    <slot name="popArea"></slot>
    <slot name="tipsArea"></slot>
    <i v-if="showIcon" @click="searchHolder" class="hs-icon hs-icon-search"></i>
  </div>
</template>

<script>
export default {
  name: 'mddInput',
  props: {
    placeholder: {
      type: String,
      default: '请输入目的地'
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    inputValue: {
      type: String,
      default: ''
    }
  },
  methods: {
    focusHolder () {
      this.$emit('focusHolder')
    },
    blurHolder () {
      this.$emit('blurHolder')
    },
    keydownHolder () {
      this.$emit('keydownHolder')
    },
    keyupHolder () {
      this.$emit('keyupHolder')
    },
    searchHolder () {
      this.$emit('searchHolder')
    },
    inputHolder (e) {
      this.$emit('update:inputValue', e.target.value)
    }
  }
}
</script>

<style scoped lang='stylus'>
.mddInput
  position relative
  input
    width calc(100% - 12px)
    font-size 16px
    color #333
    display block
    height 100%
    border-radius 4px
    border 1px solid #999
    padding 0 0 0 10px
    &:focus
      border-color $theme_color
      box-shadow 0 0 4px $theme_color
      transition box-shadow 0.4s linear 0s
  .hs-icon-search
    top 50%
    transform translateY(-50%)
    right -5px
    width 20px
    height 18px
    background-position -70px -200px
    overflow hidden
    cursor pointer
</style>
