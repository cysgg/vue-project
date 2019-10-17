<template>
  <div>
    <div class="asidebox-hd">
      <h2 class="hd-title">
        <router-link to="" tag="a">
          {{title}}
        </router-link>
      </h2>
      <router-link class="hd-right" to="" tag="a">
        {{headRight}}
      </router-link>
    </div>
    <div class="asidebox-bd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'asidebox',
  props: {
    title: {
      type: String,
      default: ''
    },
    headRight: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="stylus">
.asidebox-hd
  height 35px
  line-height 35px
  margin-bottom 12px
  .hd-title
    float left
    color #333
    font-weight normal
    a
      color #333
      text-decoration none
      font-size 18px
  .hd-right
    float right
    color #999
.asidebox-bd
  width 260px
  height 246px
  position relative
  overflow hidden
</style>
