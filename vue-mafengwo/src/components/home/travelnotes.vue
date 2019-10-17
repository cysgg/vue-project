<template>
  <div>
    <!-- 标题 -->
    <travelnotes-navbar ref="tn_nav" @navbarClick="navbarHandle"></travelnotes-navbar>
    <!-- 内容 -->
    <travelnotes-content :tnNavEl='tnNavEl' :tnType='tnType'></travelnotes-content>
  </div>
</template>

<script>
import travelnotesNavbar from 'components/home/travelnotesNavbar'
import travelnotesContent from 'components/home/travelnotesContent'
export default {
  name: 'travelnotes',
  data () {
    return {
      tnNavEl: null,
      tnType: 'hot'
    }
  },
  components: {
    travelnotesNavbar,
    travelnotesContent
  },
  mounted () {
    this.tnNavEl = this.$refs.tn_nav.$el
  },
  methods: {
    navbarHandle (val) {
      console.log(val)
      this.tnType = val
    }
  }
}
</script>

<style scoped>

</style>
