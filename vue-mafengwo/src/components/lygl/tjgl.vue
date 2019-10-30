<template>
  <div>
    <div class="hd">
      <h3>推荐攻略</h3>
    </div>
    <div
      v-for="(item, index) in tjglList"
      :key="index"
    >
      <div class="feed-item">
        <router-link to="" tag="a">
          <div class="bar">
            <span class="stat">
              <span class="num">
                {{item.nums}}
              </span>
              {{item.nums_type}}
              <i :class="{
                'icon-cart': item.type === '3',
                'icon-hand': ['1'].includes(item.type)
                }"></i>
            </span>
            <span class="type">
              <i :class="{
                'icon-line': item.type === '1',
                'icon-sales': item.type === '3'
              }"></i>
              来自
              <strong>{{item.from_type}}</strong>
            </span>
          </div>
          <div class="title">
            {{item.title}}
          </div>
          <div class="txt" v-if="['3'].includes(item.type)">
            <div class="info">{{item.content}}</div>
          </div>
          <div class="imgs" v-if="['3'].includes(item.type)">
            <div
              v-for="imgUrl in item.img_list"
              :key="imgUrl"
            >
              <img v-lazy="imgUrl" alt="">
            </div>
            <div class="ext-r">{{item.browses_num}}浏览</div>
          </div>
          <div class="art" v-if="['1'].includes(item.type)">
            <div class="dt">
              <img v-lazy="item.body_img" alt="">
            </div>
            <div class="dd">
              <div class="info">{{item.content}}</div>
              <div class="ext-r">
                <span class="author">
                  <img v-lazy="item.author_img" alt="">
                  {{item.author_name}}
                </span>
                <span class="nums">{{item.browses_num}}浏览，{{item.comments_num}}评论</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="hr"></div>
    </div>
    <div v-if="hasMore" @click="getMore" class="_j_page_loader">
      <span>加载更多</span>
      <i></i>
    </div>
    <div v-else class="_j_page_loader">
      <span>没有更多了</span>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  name: 'tjgl',
  data () {
    return {
      total: 0,
      tjglList: [],
      tjglQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  computed: {
    hasMore () {
      return this.tjglQuery.page * this.tjglQuery.limit < this.total
    }
  },
  created () {
    this.getTjglList()
  },
  methods: {
    getTjglList () {
      api.getTjglInfo(this.tjglQuery).then(res => {
        console.log(res)
        this.tjglList = this.tjglList.concat(res.tjglListMock)
        this.total = res.total
      })
    },
    getMore () {
      this.tjglQuery.page++
      this.getTjglList()
    }
  }
}
</script>

<style scoped lang='stylus'>
.hd
  height 50px
  border-bottom 1px solid #eee
  line-height 48px
  h3
    float left
    font-weight normal
    font-size 20px
    color #333
.hr
  margin-top 20px
  height 1px
  background-color #e5e5e5
  overflow hidden
.feed-item
  padding 20px 0
  font-size 14px
  line-height 24px
  &:hover
    background-color #f8f8f8
    padding 21px 15px 20px
    margin -1px -15px 0
  .ext-r
    float right
    font-size 12px
    line-height 22px
    color #999
  .icon-hand,
  .icon-cart
    display inline-block
    margin-left 5px
    width 15px
    height 15px
    background url(../../assets/images/new-gl-icon6.png) no-repeat -40px -40px
    overflow hidden
    vertical-align -2px
  a
    display block
    .bar
      &:after
        content '\20'
        display block
        clear both
      .stat
        float right
        padding 0 15px
        line-height 30px
        border 1px solid $theme_color
        border-radius 15px
        font-size 14px
        background-color #fff
        color #666
        .num
          color $theme_color
        .icon-cart
          width 16px
          background-position -20px -116px
      .type
        float left
        display inline-block
        line-height 20px
        font-size 12px
        color #666
        i
          float left
          margin-right 10px
          width 20px
          height 20px
          background url(../../assets/images/new-gl-icon6.png) no-repeat 0 0
          overflow hidden
        .icon-sales
          background-position 0 -20px
        .icon-line
          background-position 0 -40px
        strong
          font-weight normal
          color $theme_color
    .title
      margin-bottom 15px
      font-size 20px
      color #333
    .txt
      margin-bottom 15px
      color #666
    .imgs
      &:after
        content '\20'
        display block
        clear both
      div
        float left
        width 220px
        display inline
        margin-right 15px
      .ext-r
        float right
        margin 0
        line-height 130px
        width auto
        display inline
    .art
      &:after
        content '\20'
        display block
        clear both
      .dt
        float left
        width 220px
        display inline
        margin-right 20px
        img
          width 220px
      .dd
        overflow hidden
        .info
          height 102px
          padding-top 10px
          margin-bottom 16px
          color #666
        .ext-r
          float right
          color #999
          line-height 22px
          font-size 12px
          .author
            display inline-block
            margin-right 10px
            font-size 12px
            color $theme_color
            img
              margin-right 5px
              width 16px
              height 16px
              border-radius 50%
              vertical-align middle
              overflow hidden
._j_page_loader
  margin-top 10px
  background-color #fff5e5
  border-radius 4px
  color #666
  display block
  height 40px
  line-height 40px
  text-align center
  width 100%
  &:hover
    background-color #efefef
    color #666
    text-decoration none
    i
      background-position 0 -621px
  i
    display inline-block
    height 10px
    margin-left 6px
    width 10px
    background rgba(0, 0, 0, 0) url(../../assets/images/mfwask-2016sprite_v3.png) no-repeat scroll 0 -592px;
</style>
