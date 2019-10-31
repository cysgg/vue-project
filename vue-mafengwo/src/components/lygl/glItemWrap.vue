<template>
  <div>
    <div class="p_upw">
      <div class="uptime_p">
        <div
          class="uptime_div"
          v-for="(sele, index) in selectList"
          :key="sele.name"
        >
          <span
            :class="{'upt_on': sele.on}"
            @click="handleSelect(index)"
          >
            {{sele.name}}
          </span>
          <i v-if="index < selectList.length - 1">|</i>
        </div>
        <div class="clear"></div>
      </div>
      <div class="mfw_de">
        <p>
          马蜂窝旅游攻略已覆盖全球
          <router-link to="" >
            <span>{{regionSum}}</span>
          </router-link>
          个地区
          <router-link to="" >
            <span>{{categorySum}}</span>
          </router-link>
          个品类。已有
          <span>{{total}}</span>
          位蜂蜂的旅行从这里开始
        </p>
      </div>
      <div class="clear"></div>
    </div>
    <div class="gl_wrap">
      <div
        class="gl_list"
        v-for="(gl, i) in lyglItemListMock"
        :key="i"
      >
        <glItem :imgUrl="gl.imgUrl" :itemName="gl.name" :update_time="gl.updata_time" :down_cout="gl.down_cout"></glItem>
      </div>
    </div>
  </div>
</template>

<script>
import glItem from 'components/lygl/glItem'
import { mapGetters } from 'vuex'
export default {
  name: 'glItemWrap',
  props: {
    lyglItemList: {
      type: Array
    }
  },
  components: {
    glItem
  },
  data () {
    return {
      selectList: [{
        name: '本月最受欢迎',
        on: true
      }, {
        name: '下载人气',
        on: false
      }, {
        name: '更新时间',
        on: false
      }],
      currIndex: 0
    }
  },
  watch: {
    $route () {
      this.handleSelect(0)
    }
  },
  computed: {
    ...mapGetters('lygl', ['lyglMddList', 'total']),
    regionSum () {
      if (this.lyglMddList && this.lyglMddList.length > 0) {
        return this.lyglMddList[0].mapList.reduce((p, n) => {
          return p + n.num
        }, 0) + this.lyglMddList[1].mapList.reduce((p, n) => {
          return p + n.num
        }, 0)
      }
      return 0
    },
    categorySum () {
      if (this.lyglMddList && this.lyglMddList.length > 0) {
        return this.lyglMddList[2].mapList.reduce((p, n) => {
          return p + n.num
        }, 0)
      }
      return 0
    },
    lyglItemListMock () {
      return this.sortFuncMock(this.lyglItemList)
    }
  },
  methods: {
    handleSelect (index) {
      this.currIndex = index
      for (let i = 0; i < this.selectList.length; i++) {
        if (i === index) {
          this.selectList[i].on = true
        } else {
          this.selectList[i].on = false
        }
      }
    },
    sortFuncMock (list) {
      if (!list || list.length <= 0) {
        return []
      }
      let listMock = list.slice()
      if (this.currIndex === 1) {
        listMock.sort(this.sortByCount)
      } else if (this.currIndex === 2) {
        listMock.sort(this.sortByTime)
      }
      return listMock
    },
    sortByTime (a, b) {
      return new Date(Date.parse(b.updata_time)) - new Date(Date.parse(a.updata_time))
    },
    sortByCount (a, b) {
      return parseInt(b.down_cout) - parseInt(a.down_cout)
    }
  },
  created () {
    this.$store.dispatch('lygl/getLyglMddList')
  }
}
</script>

<style scoped lang='stylus'>
.p_upw
  margin-top 30px
  overflow hidden
  .uptime_p
    float left
    margin-top 5px
    .uptime_div
      float left
    span
      float left
      font-size 14px
      color #666
      line-height 16px
      padding-bottom 4px
      cursor pointer
      &.upt_on
        color $theme_color
        border-bottom 2px solid $theme_color
      &:hover
        color $theme_color
        border-bottom 2px solid $theme_color
    i
      font-style normal
      float left
      color #d8d8d8
      padding 0 12px
  .mfw_de
    float right
    height 28px
    padding 0 28px
    background-color #F1F1F1
    border-radius 30px
    p
      line-height 28px
      color #666
      span
        color $theme_color
.gl_wrap
  margin-top 25px
  width 1020px
  overflow hidden
  padding-bottom 20px
  &:after
    content: ''
    clear both
    display block
</style>
