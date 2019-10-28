<template>
  <div>
    tjgl
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  name: 'tjgl',
  data () {
    return {
      tjglQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created () {
    api.getTjglInfo(this.tjglQuery).then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped lang='stylus'>

</style>
