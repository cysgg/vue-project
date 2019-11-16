<template>
  <div>
    <div class="article_index">
      <router-link :to="{name: 'llzm'}">
        <div v-if="travelNoteInfo.travelMarkInfo" class="dl">
          <div class="dt">
            <img v-lazy="travelNoteInfo.travelMarkInfo.img" alt="">
            <i></i>
            <div class="ai_date">
              <span>
                <i class="t-fs"></i>
              </span>
              <strong>{{travelNoteInfo.travelMarkInfo.time | formatDateMD}}</strong>
            </div>
          </div>
          <div class="dd">{{travelNoteInfo.travelMarkInfo.time | formatDate}} 蜂首纪念</div>
        </div>
      </router-link>
    </div>
    <sideSlider
      v-if="travelNoteInfo.relevantGLList"
      :sideList="travelNoteInfo.relevantGLList"
      sideTitle="相关攻略"
      ></sideSlider>
    <div class="strick-nav">
      <sideSlider
        v-if="travelNoteInfo.relevantYJList"
        :sideList="travelNoteInfo.relevantYJList"
        sideTitle="相关游记"
        ></sideSlider>
      <travelCatalog :catalogList="travelNoteInfo.catalogList" catalogTitle="游记目录"></travelCatalog>
    </div>
  </div>
</template>

<script>
import sideSlider from 'components/common/sideSlider'
import travelCatalog from 'components/common/travelCatalog'
export default {
  name: 'sideNav',
  components: {
    sideSlider,
    travelCatalog
  },
  inject: {
    travelNoteInfo: {
      default: null
    }
  },
  filters: {
    formatDate (val) {
      let dateList = val.split('-')
      return `${dateList[0]}年${dateList[1]}月${dateList[2]}日`
    },
    formatDateMD (val) {
      let dateList = val.split('-')
      return `${dateList[1]}/${dateList[2]}`
    }
  }
}
</script>

<style scoped lang='stylus'>
.article_index
  padding 4px 4px 0
  border 1px solid #d6d6d6
  margin 0 0 22px
  font-size 14px
  box-shadow 0 2px 0 rgba(0, 0, 0, .08)
  overflow hidden
  a
    color #666
    .dl
      .dt
        position relative
        height 142px
        img
          width 100%
        i
          position absolute
          left 3px
          top -6px
          width 44px
          height 46px
          background url(../../assets/images/notes-medal3.png) -50px 0
        .ai_date
          position absolute
          right 10px
          bottom -37px
          width 45px
          height 45px
          border 2px solid #2b2b2b
          border-radius 5px
          background-color #fff
          text-align center
          color #111
          span
            display block
            background-color #f27178
            line-height 15px
            font-size 9px
            white-space nowrap
            border-bottom 2px solid #2b2b2b
            border-radius 2px 2px 0 0
            i
              display inline-block
              width 40px
              height 11px
              background url(../../assets/images/notes-medal3.png) no-repeat -200px 0
              overflow hidden
              vertical-align top
              position static
              top -6px
              left 3px
              margin-top 2px
          strong
            display block
            line-height 28px
            font-size 14px
            font-weight bold
      .dd
        height 48px
        line-height 50px
        overflow hidden
        padding-left 5px
        font-size 14px
.strick-nav
  position sticky
  top 16px
</style>
