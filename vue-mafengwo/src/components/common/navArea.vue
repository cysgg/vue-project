<template>
  <div>
    <div class="r-navbar">
      <div
        v-for="(item, index) in navAreaList"
        :key="index"
        class="forblock"
        @mouseover="addactive(index)"
      >
        <span :class="{'on': currIndex === index}">{{item.navbarTitle}}</span>
        <i v-if="index !== navAreaList.length - 1" class="divide"></i>
      </div>
    </div>
    <div class="r-navbody" v-show="hasUpdataDOM">
      <slot name="navAreaBody" :scopeBody="currItem"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navArea',
  props: {
    navAreaList: {
      type: Array,
      validator (val) {
        return Object.getOwnPropertyNames(val[0]).includes('navbarTitle')
      }
    }
  },
  data () {
    return {
      currIndex: 0,
      hasUpdataDOM: true
    }
  },
  computed: {
    currItem () {
      console.log(this.navAreaList[this.currIndex], '------')
      if (this.navAreaList && this.navAreaList.length > 0) {
        console.log(1)
        return this.navAreaList[this.currIndex]
      }
      return []
    }
  },
  watch: {
    currItem (nv, ov) {
      this.$nextTick(() => {
        this.hasUpdataDOM = true
      })
    }
  },
  methods: {
    addactive (index) {
      if (this.currIndex === index) {
        return
      }
      this.currIndex = index
      this.hasUpdataDOM = false
    }
  }
}
</script>

<style scoped lang="stylus">
.r-navbar
  margin -10px 0 30px
  text-align center
  font-size 18px
  color #eee
  line-height 22px
  .forblock
    display inline
    font-size 0
    span
      color #333
      display inline-block
      margin 0 25px
      vertical-align top
      font-size 18px
    .on
      padding-bottom 12px
      color $theme_color
      border-bottom 3px solid #ff9d00
    .divide
      display inline-block
      margin 3px 0 0 0
      width 1px
      height 15px
      background-color #eee
      overflow hidden
      line-height 100
      vertical-align top
</style>
