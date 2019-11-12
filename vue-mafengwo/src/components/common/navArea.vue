<template>
  <div>
    <div class="r-navbar">
      <div
        v-for="(item, index) in navAreaList"
        :key="index"
        class="forblock"
        @mouseover="addactive(index)"
        @click="clickActive(index)"
      >
        <span :class="{'on': currIndex === index}">{{item.navbarTitle}}</span>
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
    },
    acitveType: {
      type: String,
      default: 'mouseover',
      validator (val) {
        return ['click', 'mouseover'].includes(val)
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
      if (this.navAreaList && this.navAreaList.length > 0) {
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
      if (this.acitveType === 'mouseover') {
        if (this.currIndex === index) {
          return
        }
        this.currIndex = index
        this.hasUpdataDOM = false
      }
    },
    clickActive (index) {
      if (this.acitveType === 'click') {
        if (this.currIndex === index) {
          return
        }
        this.currIndex = index
        this.hasUpdataDOM = false
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.r-navbar
  margin -10px 0 20px
  text-align center
  font-size 18px
  color #eee
  line-height 22px
  display flex
  border-bottom 1px solid #e4e4e4
  .forblock
    flex 1
    display inline
    font-size 0
    cursor pointer
    span
      color #333
      display inline-block
      width 100%
      vertical-align top
      text-align center
      font-size 18px
    .on
      padding-bottom 12px
      color $theme_color
      border-bottom 3px solid #ff9d00
</style>
