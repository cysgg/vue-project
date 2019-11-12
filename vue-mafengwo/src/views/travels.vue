<template>
  <div>
    <!-- 头部照片组件 -->
    <topFocus></topFocus>
    <!-- 游记头部信息组件 -->
    <titleBar></titleBar>
    <!-- 文章主体 -->
    <contentWrap></contentWrap>
  </div>
</template>

<script>
import topFocus from 'components/travels/topFocus'
import titleBar from 'components/travels/titleBar'
import contentWrap from 'components/travels/contentWrap'
import api from '@/api/index'
export default {
  name: 'travels',
  components: {
    topFocus,
    titleBar,
    contentWrap
  },
  provide () {
    return {
      travelNoteInfo: this.travelInfo
    }
  },
  data () {
    return {
      travelInfo: {}
    }
  },
  created () {
    api.getTravelInfo(this.$route.params).then(res => {
      console.log(res)
      // this.travelInfo = res.travelInfo
      for (let key of Object.getOwnPropertyNames(res.travelInfo)) {
        this.$set(this.travelInfo, key, res.travelInfo[key])
      }
    })
  }
}
</script>

<style scoped lang='stylus'>

</style>
