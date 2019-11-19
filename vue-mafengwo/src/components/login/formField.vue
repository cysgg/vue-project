<template>
  <div class="form-field">
    <input type="text" :placeholder="tip">
  </div>
</template>

<script>
export default {
  name: 'formField',
  props: {
    tip: {
      type: String
    }
  }
}
</script>

<style scoped lang='stylus'>
.form-field
  clear both
  width 320px
  margin 0 auto
  padding-top 10px
  input
    width 306px
    height 28px
    border 1px solid #d8d8d8
    border-radius 4px
    font-size 14px
    color #666
    line-height 28px
    padding 6px 0 6px 12px
    box-shadow 0 0 5px #fff
    outline 0
    transition box-shadow .25s linear 0s
    -webkit-transition box-shadow .25s linear 0s
    &:focus
      border 1px solid #ffa200
      box-shadow 0 0 5px #ffa200
      outline 0
      transition box-shadow .25s linear 0s
      -webkit-transition box-shadow .25s linear 0s
</style>
