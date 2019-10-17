<template>
  <div>
    <asidebox :title="'旅游攻略推荐'" :headRight="'更多'">
      <div v-if="gonglveInfo" class="gonglve-item">
        <div class="img">
          <router-link to="" tag="a">
            <img :src="gonglveInfo.imgUrl" alt="">
            <span class="mark">
              {{gonglveInfo.title}}
            </span>
          </router-link>
        </div>
        <h3>
          <router-link tag="a" to="">
            {{gonglveInfo.text}}
          </router-link>
        </h3>
      </div>
    </asidebox>
  </div>
</template>

<script>
import asidebox from 'components/common/asidebox.vue'
import api from '@/api/index'
export default {
  name: 'gonglve',
  components: {
    asidebox
  },
  data () {
    return {
      gonglveInfo: null
    }
  },
  created () {
    api.getGonglveInfo().then(res => {
      console.log(res)
      this.gonglveInfo = res.gonglve
    })
  }
}
</script>

<style scoped lang="stylus">
.gonglve-item
  margin-bottom 10px
  .img
    position relative
    height 140px
    margin-bottom 10px
    .mark
      position absolute
      left 0
      top 7px
      padding 0 6px
      color #fff
      line-height 24px
      background-color #ff6262
      font-size 12px
      &:after
        content ''
        position absolute
        top 0
        right -5px
        border-top 12px solid #ff6262
        border-bottom 12px solid #ff6262
        border-right 5px dashed transparent
  h3
    margin 10px 0 5px
    width 260px
    height 24px
    line-height 24px
    font-size 16px
    color #333
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
    font-weight normal
    a
      color #333
</style>
