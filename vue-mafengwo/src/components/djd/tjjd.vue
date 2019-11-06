<template>
  <div>
    <div class="wrapper">
      <div class="r-title">
        <h2>特价酒店</h2>
      </div>
      <navArea v-if="jdList.length > 0" acitveType="click" :navAreaList="jdList">
        <template v-slot:navAreaBody="{scopeBody}">
          <div v-if="scopeBody">
            <ul>
              <li
                v-for="(item, index) in scopeBody.imgList"
                :key="index"
              >
                <scoreImgBox :imgDate="item"></scoreImgBox>
              </li>
            </ul>
          </div>
        </template>
      </navArea>
    </div>
  </div>
</template>

<script>
import navArea from 'components/common/navArea.vue'
import scoreImgBox from 'components/common/scoreImgBox.vue'
import api from '@/api/index'
export default {
  name: 'tjjd',
  components: {
    navArea,
    scoreImgBox
  },
  data () {
    return {
      jdList: []
    }
  },
  created () {
    api.getTjjdInfo().then(res => {
      console.log(res)
      this.jdList = res.jdList
    })
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  width 1000px
  margin 0 auto
ul
  width 1012px
  &:after
    content ''
    clear both
    display block
    overflow hidden
    height 0
  li
    width 240px
    height 240px
    float left
    overflow hidden
    margin 0 13px 13px 0
    position relative
</style>
