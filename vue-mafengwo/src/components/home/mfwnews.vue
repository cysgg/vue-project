<template>
  <div>
    <asidebox :title="'马蜂窝旅游网最新资讯'">
      <div
        class="news-li"
        v-for="(item, index) in mfwnewsList"
        :key="index"
      >
        {{item.date | formatMonthAndDay}}
        <router-link :to="item.href" tag="a">
          {{item.text}}
        </router-link>
      </div>
    </asidebox>
  </div>
</template>

<script>
import asidebox from 'components/common/asidebox.vue'
import { formatMonthAndDay } from '@/utils/filter'
import api from '@/api/index'
export default {
  name: 'mfwnews',
  components: {
    asidebox
  },
  data () {
    return {
      mfwnewsList: null
    }
  },
  filters: {
    formatMonthAndDay
  },
  created () {
    api.getMfwnewsInfo().then(res => {
      console.log(res)
      this.mfwnewsList = res.mfwnewsList
    })
  }
}
</script>

<style scoped lang="stylus">
.news-li
  height 30px
  width 260px
  line-height 30px
  overflow hidden
  white-space nowrap
  text-overflow ellipsis
  position relative
  a
    margin-left 5px
    color #666
    &:hover
      outline 0
      text-decoration underline
</style>
