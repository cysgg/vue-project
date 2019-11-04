<template>
  <div
    class="people-wrap"
    :class="{'focus': hasFocus}"
    @click="focusHolder"
    :data-word="peopelContent"
    >
    <span class="default-wrap">{{peopelContent}}</span>
    <i class="hs-icon icon-person"></i>
    <div class="people-panel" v-if="hasFocus">
      <div class="panel-body">
        <div class="row-select-wrap">
          <span class="laber">每间</span>
          <selectPanel
            class="ngp-select"
            :optionsList="adultsList"
            :defaultType="'成人'"
            :defaultNums.sync="adultNum"
          ></selectPanel>
          <selectPanel
            class="ngp-select"
            :optionsList="kidsList"
            :defaultType="'儿童'"
            :defaultNums.sync="kidNum"
          ></selectPanel>
        </div>
      </div>
      <div class="panel-btn">
        <span
          class="btn-action"
          @click.stop="submitBtn"
          >确认</span>
      </div>
    </div>
  </div>
</template>

<script>
import selectPanel from 'components/common/selectPanel'
export default {
  name: 'peopleInput',
  components: {
    selectPanel
  },
  props: {
    peopelContent: {
      type: String,
      default: '人数未定'
    }
  },
  data () {
    return {
      hasFocus: false, // 是否聚焦
      bindBulrHolder: null, // 失焦事件
      adultsList: Array.from({length: 7}, (v, i) => i + 1), // 默认成人option列表
      kidsList: Array.from({length: 4}, (v, i) => i), // 默认小孩option列表
      adultNum: 0, // 成人选择人数
      kidNum: 0 // 小孩选择人数
    }
  },
  methods: {
    focusHolder () {
      this.hasFocus = true
    },
    bulrHolder (e) {
      if (!this.findwords(e.path)) {
        this.hasFocus = false
      }
    },
    findwords (list) {
      return list.some(v => {
        if (v.dataset && v.dataset.word && (v.dataset.word === this.peopelContent)) {
          return true
        } else {
          return false
        }
      })
    },
    submitBtn () {
      this.hasFocus = false
      this.$emit('peopleCheck', [this.adultNum, this.kidNum])
    }
  },
  mounted () {
    this.bindBulrHolder = this.bulrHolder.bind(this)
    window.addEventListener('click', this.bindBulrHolder, false)
  },
  beforeDestroy () {
    window.removeEventListener('click', this.bindBulrHolder, false)
  }
}
</script>

<style scoped lang='stylus'>
.people-wrap
  .default-wrap
    font-size 16px
    color #666
    display block
    height 45px
    line-height 45px
    padding 0 12px
    border-radius 4px
    border 1px solid #999
    width 159px
    cursor pointer
  .icon-person
    display inline-block
    position absolute
    top 15px
    right 10px
    width 15px
    height 16px
    background-position -70px -140px
    vertical-align middle
    overflow hidden
  .people-panel
    position absolute
    right 0
    z-index 1000
    margin-top 0
    display block
    border 1px solid $theme_color
    border-radius 4px
    box-shadow 0 0 4px $theme_color
    background-color #fff
    padding 0 15px
    width 480px
    transition all .2s
    .panel-btn
      border-bottom 0
      padding 20px 0
      line-height 28px
      &:after
        content ''
        clear both
        display block
        overflow hidden
        height 0
      .btn-action
        float right
        display inline-block
        padding 2px 22px
        background-color $theme_color
        border-radius 4px
        font-size 14px
        line-height 24px
        color #fff
        cursor pointer
    .panel-body
      padding 20px 0
      border-bottom 1px solid #c6c6c6
      line-height 28px
      &:after
        content ''
        clear both
        display block
        overflow hidden
        height 0
      .laber
        float left
        width 60px
      .ngp-select
        float left
        position relative
        width 90px
        margin-right 10px
.focus
  .default-wrap
    border 1px solid $theme_color
    box-shadow 0 0 4px $theme_color
    transition box-shadow .4s linear 0s
</style>
