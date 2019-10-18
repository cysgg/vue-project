<template>
  <div>
    <asidebox :title="'最新活动'" :headRight="'查看全部'">
      <digSlider outClass="activity" :sliderList="activityList"></digSlider>
    </asidebox>
  </div>
</template>

<script>
import asidebox from 'components/common/asidebox.vue'
import digSlider from 'components/common/digSlider.vue'
import api from '@/api/index'
export default {
  name: 'activity',
  components: {
    asidebox,
    digSlider
  },
  data () {
    return {
      activityList: []
    }
  },
  created () {
    api.getActivityInfo().then(res => {
      console.log(res)
      this.activityList = res.activityList
    })
  }
}
</script>

<style scoped lang="stylus">
</style>
