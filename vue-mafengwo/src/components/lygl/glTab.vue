<template>
  <div>
    <div class="gl_nav">
      <router-link :to="{name: 'gonglve'}">
        全部旅游攻略导航
      </router-link>
      <span>></span>
      <strong>{{$route.params.name}}</strong>
      <div class="clear"></div>
    </div>
    <div
      class="gl_wrap"
      v-for="(lyglMdd, index) in lyglMddList"
      :key="lyglMdd.type + showMoreList[index]"
    >
      <h3>
        <router-link to="">
          {{lyglMdd.type}}
        </router-link>
      </h3>
      <ol :class="{'auto-height': showMoreList[index]}">
        <li
          v-for="item in lyglMdd.mapList"
          :key="item.name"
        >
          <router-link :class="{'onfs': $route.params.name === item.name}" :to="item.name">{{item.name}}({{item.num}})</router-link>
        </li>
      </ol>
      <span class="sp_toggle" @click="handleClick(index)">
        <div :class="{'toggle': showMoreList[index]}" class="more_selector"></div>
      </span>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'glTab',
  data () {
    return {
      showMoreList: []
    }
  },
  computed: {
    ...mapGetters('lygl', ['lyglMddList'])
  },
  methods: {
    handleClick (index) {
      let i = parseInt(index)
      this.$set(this.showMoreList, i, !this.showMoreList[i])
    },
    tabChnage () {
      this.$nextTick(() => {
        for (let i = 0; i < this.lyglMddList.length; i++) {
          if (this.lyglMddList[i].mapList.some(v => v.name === this.$route.params.name)) {
            this.$set(this.showMoreList, i, true)
          } else {
            this.$set(this.showMoreList, i, false)
          }
        }
      })
    }
  },
  watch: {
    $route () {
      this.tabChnage()
    }
  },
  created () {
    this.$store.dispatch('lygl/getLyglMddList')
    this.tabChnage()
  }
}
</script>

<style scoped lang='stylus'>
.gl_nav
  line-height 16px
  color #666
  margin-top 35px
  margin-bottom 15px
  a
    float left
    font-size 16px
    color $theme_color
  span
    float left
    font-size 18px
    margin-left 12px
  strong
    float left
    font-size 16px
    font-weight normal
    margin-left 12px
.gl_wrap
  border-bottom 1px solid #E3E3E3
  width 980px
  padding-bottom 8px
  margin-top 5px
  overflow hidden
  h3
    float left
    font-size 14px
    color #333
    line-height 16px
    margin-top 7px
    a
      color #333
  .auto-height
    height auto
  ol
    float left
    width 790px
    margin-left 8px
    height 28px
    display inline
    overflow hidden
    li
      float left
      height 22px
      margin-left 5px
      margin-top 5px
      display inline
      white-space normal
      a
        display block
        float left
        height 22px
        line-height 22px
        color #666
        padding 0 8px
      .onfs
        color #fff
        background-color $theme_color
  .sp_toggle
    float left
    width 42px
    height 16px
    margin-left 10px
    margin-top 7px
    .more_selector
      display block
      width 42px
      height 16px
      text-indent -10000px
      background url(../../assets/images/ms.png) no-repeat
      background-position 0 0
      overflow hidden
      &:hover
        background-position -43px 0
    .toggle
      background-position 0 -17px
      &:hover
        background-position -43px -17px
</style>
