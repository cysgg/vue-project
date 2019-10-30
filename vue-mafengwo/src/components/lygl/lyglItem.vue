<template>
  <div>
    lyglItem
  </div>
</template>

<script>
import api from '@/api/index'
import { mapGetters } from 'vuex'
export default {
  name: 'lyglItem',
  data () {
    return {
      LyglItemList: []
    }
  },
  computed: {
    ...mapGetters('lygl', ['lyglMddList'])
  },
  created () {
    this.$store.dispatch('lygl/getLyglMddList')
    api.getLyglItemInfo({name: this.$route.params.name}).then(res => {
      this.LyglItemList = res.LyglItemList
      console.log(res)
    })
  }
}
</script>

<style scoped lang='stylus'>

</style>
