<template>
  <div>
     <asidebox :title="'加入马蜂窝'" :headRight="'了解详情'">
       <router-link v-if="joinmfw" to="" tag="a">
         <img v-lazy="joinmfw.imgUrl" width="260" height="170" alt="">
       </router-link>
     </asidebox>
  </div>
</template>

<script>
import asidebox from 'components/common/asidebox.vue'
import api from '@/api/index'
export default {
  name: 'joinmfw',
  components: {
    asidebox
  },
  data () {
    return {
      joinmfw: null
    }
  },
  created () {
    api.getJoinmfwInfo().then(res => {
      console.log(res)
      this.joinmfw = res.joinmfw
    })
  }
}
</script>

<style scoped>

</style>
