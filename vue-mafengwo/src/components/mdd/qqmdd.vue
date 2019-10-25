<template>
  <div>
    <div class="wrapper">
      <div class="row-list">
        <h2 class="hd">
          全球目的地
          <span>(按拼音字母排序)</span>
          <router-link to="" class="btn-add">
            <i>+</i>
            添加目的地
          </router-link>
        </h2>
        <div class="bd">
          <travelList
            v-for="(item, index) in qqmddList"
            :key="index"
            :travelList="item.char"
            :travelTitle="item.region"
          ></travelList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import travelList from 'components/common/travelList'
import api from '@/api/index'
export default {
  name: 'qqmdd',
  components: {
    travelList
  },
  data () {
    return {
      qqmddList: []
    }
  },
  created () {
    api.getQqmddInfo().then(res => {
      console.log(res)
      this.qqmddList = res.qqmddList
    })
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  width 1000px
  margin 0 auto
  .row-list
    margin 0
    &:last-child
      margin 0
    .hd
      margin-bottom 25px
      font-size 32px
      line-height 30px
      font-weight normal
      span
        font-size 14px
        color #a8a8a8
      .btn-add
        display inline-block
        margin-left 20px
        font-size 14px
        color $theme_color
        i
          float left
          margin-right 5px
          font-weight bold
          font-style normal
          font-size 18px
          vertical-align middle
    .bd
      overflow hidden
</style>
