<template>
  <div>
    hotelMdd
  </div>
</template>

<script>
export default {
  name: 'hotelMdd',
  data () {
    return {
      searchQuery: {
        peopleCountList: [],
        endDate: [],
        mdd: '',
        startDate: []
      }
    }
  },
  created () {
    if (this.$route.params) {
      this.searchQuery = this.$route.params
    }
  }
}
</script>

<style scoped lang='stylus'>

</style>
