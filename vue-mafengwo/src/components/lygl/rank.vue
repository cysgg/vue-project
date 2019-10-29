<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in rankList"
        :key="index"
        :class="{'gl_list': index === 0}"
      >
        <span v-if="index !== 0" class="num">{{index + 1}}</span>
        <router-link v-if="index !== 0" to="" tag="a">{{item.rankName}}</router-link>
        <router-link v-if="index === 0" to="" tag="a">
          <img v-lazy="item.imgUrl" :alt="item.rankName">
        </router-link>
        <p v-if="index === 0" class="time">更新{{item.updata_time}}</p>
        <div v-if="index === 0" class="down_cout">
          <span></span>
          <p>{{item.count}}人下载</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  name: 'rank',
  data () {
    return {
      rankList: []
    }
  },
  created () {
    api.getRankInfo().then(res => {
      console.log(res)
      this.rankList = res.rankList
    })
  }
}
</script>

<style scoped lang='stylus'>
li+li
  border-top 1px solid #f7f7f7
  line-height 24px
li
  padding 15px 0
  .num
    float left
    margin-right 10px
    font-size 18px
    color $theme_color
  a
    color #333
    font-size 14px
.gl_list
  float none
  width 130px
  margin-right 40px
  a
    display block
    height 184px
    width 130px
    overflow hidden
    img
      width 100%
      height 100%
  .time
    margin 5px 0
    text-align center
  .down_cout
    height 24px
    width 130px
    background-color #EBEBEB
    border-radius 30px
    margin-top 5px
    position relative
    span
      display block
      position absolute
      top 0
      left 0
      height 24px
      width 24px
      background url(../../assets/images/new-gl-icon6.png) -20px -90px no-repeat
    p
      line-height 24px
      color #666
      padding-left 30px
</style>
