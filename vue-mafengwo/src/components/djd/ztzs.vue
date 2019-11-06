<template>
  <div>
    <div class="wrapper">
      <div class="r-title">
        <h2>主题住宿</h2>
      </div>
      <navArea v-if="zsList.length > 0" acitveType="click" :navAreaList="zsList">
        <template v-slot:navAreaBody="{scopeBody}">
          <div v-if="scopeBody">
            <ul>
              <li
                v-for="(item, index) in scopeBody.imgList"
                :key="index"
              >
                <TdImgBox :imgDate="item"></TdImgBox>
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
import TdImgBox from 'components/common/TdImgBox.vue'
import api from '@/api/index'
export default {
  name: 'ztzs',
  components: {
    navArea,
    TdImgBox
  },
  data () {
    return {
      zsList: []
    }
  },
  created () {
    api.getZtzsInfo().then(res => {
      console.log(res)
      this.zsList = res.zsList
    })
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  width 1000px
  margin 0 auto
ul
  width 1023px
  &:after
    content ''
    clear both
    display block
    overflow hidden
    height 0
  li
    width 318px
    height 240px
    float left
    margin 20px 23px 0 0
    position relative
</style>
