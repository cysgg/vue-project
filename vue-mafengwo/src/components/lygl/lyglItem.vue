<template>
  <div>
    <glTab></glTab>
    <glItemWrap :lyglItemList="lyglItemList"></glItemWrap>
  </div>
</template>

<script>
import glTab from 'components/lygl/glTab'
import glItemWrap from 'components/lygl/glItemWrap'
import api from '@/api/index'
export default {
  name: 'lyglItem',
  data () {
    return {
      lyglItemList: []
    }
  },
  components: {
    glTab,
    glItemWrap
  },
  watch: {
    $route () {
      this.getLyglItemInfo()
    }
  },
  methods: {
    getLyglItemInfo () {
      api.getLyglItemInfo({name: this.$route.params.name}).then(res => {
        this.lyglItemList = res.lyglItemList
        console.log(res)
      })
    }
  },
  created () {
    this.getLyglItemInfo()
  }
}
</script>

<style scoped lang='stylus'>

</style>
