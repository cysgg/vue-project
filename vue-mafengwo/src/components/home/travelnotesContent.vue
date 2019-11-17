<template>
  <div>
    <!-- 公共组件 传入每个item的html结构放入插槽 -->
    <paginationContent @fetchList="gettravelnotes" :paginationList="travelnotes" :page.sync="apiQuery.page" :limit.sync="apiQuery.limit" :total="total">
      <!-- 传入的每一个item模板 具名插槽 itemContent 插槽的值为travelnote -->
      <template v-slot:itemContent="{paginationItem}">
        <div class="tn-item" @click="toTravel(paginationItem)">
          <div class="tn-image">
            <img v-lazy="paginationItem.image" alt="">
          </div>
          <div class="tn-wrapper">
            <div class="tn-content">
              <div class="tn-title">
                <router-link to="" tag="a">
                  {{paginationItem.title}}
                </router-link>
              </div>
              <div class="tn-text">
                <router-link to="" tag="a">
                  {{paginationItem.context}}
                </router-link>
              </div>
            </div>
            <div class="tn-extra">
              <span class="tn-ding">
                <i class="btn-ding"></i>
                <em>{{paginationItem.liked}}</em>
              </span>
              <span class="tn-place">
                <i></i>
                <router-link to="" tag="a">
                  {{paginationItem.address}}
                </router-link>
                ，by
              </span>
              <span class="tn-user">
                <router-link to="" tag="a">
                  <img v-lazy="paginationItem.userImg" alt="">
                  {{paginationItem.userName}}
                </router-link>
              </span>
              <span class="tn-nums">
                <i></i>
                {{paginationItem.watchSum}}/{{paginationItem.watchingNum}}
              </span>
            </div>
          </div>
        </div>
      </template>
    </paginationContent>
  </div>
</template>

<script>
import paginationContent from 'components/common/paginationContent'
import api from '@/api/index'
import { scrollIt } from '@/utils/scrollIt'
export default {
  name: 'travelnotesContent',
  props: {
    tnNavEl: {
      type: HTMLDivElement,
      default: null
    },
    tnType: {
      type: String,
      validator: v => ['hot', 'new'].includes(v),
      default: 'hot'
    }
  },
  data () {
    return {
      travelnotes: [],
      total: 0,
      apiQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  components: {
    paginationContent
  },
  watch: {
    tnType (nv, ov) {
      this.apiQuery.page = 1
      this.fetchData()
        .then(res => this.scrollToTnNav())
    }
  },
  methods: {
    gettravelnotes (page) {
      // 因为apiQuery.page 在.sync已经修改了,所以不用再传值
      this.fetchData()
        .then(res => this.scrollToTnNav())
    },
    scrollToTnNav () {
      let tnScrollTop = this.tnNavEl.offsetTop
      scrollIt(tnScrollTop)
    },
    // 请求方法
    fetchData () {
      return new Promise((resolve, reject) => {
        if (this.tnType === 'hot') {
          api.getTravelnotesHotInfo(this.apiQuery).then(res => {
            console.log(res)
            this.travelnotes = res.travelnotes
            this.total = res.total
            return resolve(res)
          })
        } else {
          api.getTravelnotesNewInfo(this.apiQuery).then(res => {
            console.log(res)
            this.travelnotes = res.travelnotes
            this.total = res.total
            return resolve(res)
          })
        }
      })
    },
    toTravel (item) {
      this.$router.push({name: 'travels', params: item})
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style scoped lang="stylus">
.tn-item
  padding 15px 0
  height 150px
  .tn-image
    float left
    width 220px
    height 150px
    position relative
    img
      width 220px
      height 150px
  .tn-wrapper
    float right
    width 445px
    height 150px
    .tn-content
      height 117px
      .tn-title
        height 26px
        margin-bottom 10px
        font-size 18px
        line-height 26px
        a
          width 420px
          height 26px
          display block
          color #333
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
      .tn-text
        line-height 20px
        font-size 14px
        overflow hidden
        a
          color #666
    .tn-extra
      height 33px
      overflow hidden
      line-height 33px
      color #666
      font-size 12px
      span
        display inline-block
      i
        background url('../../assets/images/mfw_logo2.png') no-repeat
      .tn-ding
        float right
        color $theme_color
        font-size 14px
        text-align right
        .btn-ding
          font-style normal
          cursor pointer
          display inline-block
          float right
          margin-left 8px
          width 38px
          height 33px
          background-position -60px 0
          overflow hidden
        em
          font-style normal
      .tn-place
        margin-right 5px
        i
          float left
          margin 8px 5px 0 0
          width 14px
          height 16px
          background-position 0 -50px
          overflow hidden
        a
          color #666
      .tn-user
        margin-right 10px
        img
          margin-right 5px
          width 16px
          height 16px
          overflow hidden
          border-radius 50%
          vertical-align -3px
      .tn-nums
        font-size 14px
        color #999
        i
          float left
          margin 10px 5px 0 0
          width 18px
          height 14px
          background-position -30px -50px
</style>
