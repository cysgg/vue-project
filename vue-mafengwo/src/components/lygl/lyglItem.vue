<template>
  <div>
    <glTab></glTab>
  </div>
</template>

<script>
import glTab from 'components/lygl/glTab'
import api from '@/api/index'
export default {
  name: 'lyglItem',
  data () {
    return {
      LyglItemList: []
    }
  },
  components: {
    glTab
  },
  created () {
    api.getLyglItemInfo({name: this.$route.params.name}).then(res => {
      this.LyglItemList = res.LyglItemList
      console.log(res)
    })
  }
}
</script>

<style scoped lang='stylus'>

</style>
