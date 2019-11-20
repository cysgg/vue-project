<template>
  <div class="form-field">
    <input @input="inpch" @blur="checkVal" :type="type" :placeholder="tip" autocomplete="off">
    <p v-show="errMsg[iname].length > 0">{{errMsg[iname]}}</p>
  </div>
</template>

<script>
export default {
  name: 'formField',
  model: {
    event: 'inputChange',
    prop: 'val'
  },
  inject: ['errMsg'],
  props: {
    tip: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    iname: {
      type: String
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    inpch (e) {
      this.$emit('inputChange', e.target.value)
    },
    checkVal () {
      this.$emit('checkVal', this.iname)
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
  p
    clear both
    padding 0 3px
    font-size 10px
    color #ff3c00
    margin-top 10px
    text-align right
</style>
