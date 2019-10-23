<template>
  <div class="wrapper">
    <div class="r-title">
      <h2>热门目的地</h2>
    </div>
    <navArea v-if="hotmddList.length > 0" :navAreaList="hotmddList">
      <template v-slot:navAreaBody="{scopeBody}">
        <div class="hot-list">
          <div
            class="list-item"
            v-for="item in scopeBody.provinces"
            :key="item.name"
          >
            <div class="item-title">
              {{item.name}}
            </div>
            <div class="item-body">
              <router-link
                to=""
                tag="a"
                v-for="area in item.areas"
                :key="area"
              >{{area}}</router-link>
            </div>
          </div>
        </div>
      </template>
    </navArea>
  </div>
</template>

<script>
import navArea from 'components/common/navArea.vue'
import api from '@/api/index'
export default {
  name: 'mddHot',
  data () {
    return {
      hotmddList: []
    }
  },
  components: {
    navArea
  },
  created () {
    api.getHotmddInfo().then(res => {
      console.log(res)
      this.hotmddList = res.hotmddList
    })
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  .hot-list
    line-height 24px
    font-size 14px
    .list-item
      width 470px
      float left
      border-bottom 1px dashed #eee
      padding 20px 0 20px 0
      &:nth-of-type(even)
        margin-left 60px
      .item-title
        float left
        font-size 16px
        color #333
      .item-body
        margin-left 100px
        a
          margin-right 10px
          color #666
</style>
