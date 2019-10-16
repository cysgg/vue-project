<template>
  <div id="app" class="app_body">
    <tabBar></tabBar>
    <router-view/>
  </div>
</template>

<script>
import tabBar from '@/components/header/tab_bar'
export default {
  name: 'App',
  components: {
    'tabBar': tabBar
  }
}
</script>

<style lang="stylus">
body
  min-width 1140px
  overflow-x hidden
  margin 0 auto
  user-select none
</style>
