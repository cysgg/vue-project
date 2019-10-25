<template>
  <div class="wrapper">
    <div class="r-title">
      <h2>主题精选</h2>
    </div>
    <navArea v-if="catemddList.length > 0" :navAreaList="catemddList">
      <template v-slot:navAreaBody="{scopeBody}">
        <div class="tiles">
          <div
            class="item col4"
            v-for="item in scopeBody.catemdds"
            :key="item.name"
          >
            <router-link to="" tag="a">
              <img v-lazy="item.imgUrl" width="238" height="220" alt="">
              <div class="title">{{item.name}}</div>
            </router-link>
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
  name: 'catemdd',
  created () {
    api.getCatemddInfo().then(res => {
      console.log(res)
      this.catemddList = res.catemddList
    })
  },
  components: {
    navArea
  },
  data () {
    return {
      catemddList: []
    }
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  .tiles
    margin -10px -20px -10px 0
    overflow hidden
    .item
      float left
      display inline
      margin 10px 15px 10px 0
      height 220px
      position relative
      background-color #f2f2f2
      font-size 20px
      a
        display block
        color #fff
        transition all .2s ease-in 0s
        .title
          position absolute
          left 0
          bottom 0
          right 0
          padding 12px 20px 0
          height 57px
          line-height 56px
          font-weight normal
          background linear-gradient(to bottom,rgba(0,0,0,0) 10px,rgba(0,0,0,0.2) 50%,rgba(0,0,0,0.5) 100%)
    .col3
      width 323px
    .col4
      width 238px
</style>
