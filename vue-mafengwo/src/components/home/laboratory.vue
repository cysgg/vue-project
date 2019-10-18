<template>
  <div>
     <asidebox :title="'未知旅行实验室'" :headRight="'查看更多'">
       <router-link v-if="laboratory" to="" tag="a">
         <img v-lazy="laboratory.imgUrl" width="260" height="170" alt="">
       </router-link>
     </asidebox>
  </div>
</template>

<script>
import asidebox from 'components/common/asidebox.vue'
import api from '@/api/index'
export default {
  name: 'laboratory',
  components: {
    asidebox
  },
  data () {
    return {
      laboratory: null
    }
  },
  created () {
    api.getLaboratoryInfo().then(res => {
      console.log(res)
      this.laboratory = res.laboratory
    })
  }
}
</script>

<style scoped>

</style>
