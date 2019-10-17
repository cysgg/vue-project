<template>
  <div>
    <asidebox :title="'旅行家专栏'" :headRight="'专栏首页'">
      <digSlider class="asidebox-bd" :sliderList="travellerList"></digSlider>
    </asidebox>
  </div>
</template>

<script>
import asidebox from 'components/common/asidebox.vue'
import digSlider from 'components/common/digSlider.vue'
import api from '@/api/index'
export default {
  name: 'traveller',
  components: {
    asidebox,
    digSlider
  },
  data () {
    return {
      travellerList: []
    }
  },
  created () {
    api.gettravellerInfo().then(res => {
      console.log(res)
      this.travellerList = res.travellerList
    })
  }
}
</script>

<style scoped lang="stylus">
.asidebox-bd
  width 260px
  height 246px
  position relative
  overflow hidden
</style>
