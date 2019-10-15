<template>
  <div>
    <picSilder :picList="sliderList"></picSilder>
  </div>
</template>

<script>
import picSilder from 'components/common/picSilder'
import api from '@/api/index'
export default {
  name: 'showSilder',
  components: {
    picSilder
  },
  data () {
    return {
      sliderList: []
    }
  },
  created () {
    api.getSliderListInfo().then(res => {
      console.log(res)
      this.sliderList = res.sliderList
    })
  }
}
</script>

<style scoped>

</style>
