<template>
  <div>
    {{travelContentList}}
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  name: 'contentWrap',
  data () {
    return {
      travelContentList: [],
      travelContentQuery: {
        page: 1
      },
      total: 0
    }
  },
  methods: {
    getContent () {
      api.getTravelContentInfo({
        travelInfo: this.$route.params,
        query: this.travelContentQuery
      }).then(res => {
        console.log(res)
        this.total = res.total
        this.travelContentList = this.travelContentList.concat(res.travelContent)
      })
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style scoped lang='stylus'>

</style>
