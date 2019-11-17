<template>
  <div class="notes_catalog">
    <div class="catalog-title">
      {{catalogTitle}}
    </div>
    <div class="catalog-list">
      <div
        class="catalog-item"
        v-for="(catalogItem, index) in catalogList"
        :key="index"
        >
          <div class="catalog_num">
            {{catalogItem.index}}/
          </div>
          <span @click="scrollto(catalogItem.scrollTop)">{{catalogItem.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { scrollIt } from '@/utils/scrollIt'
export default {
  name: 'travelCatalog',
  props: {
    catalogList: {
      type: Array
    },
    catalogTitle: {
      type: String
    }
  },
  methods: {
    scrollto (height) {
      let clientH = Math.floor(document.documentElement.clientWidth / 2.7)
      scrollIt(height + clientH + 190)
    }
  }
}
</script>

<style scoped lang='stylus'>
.notes_catalog
  width 240px
  .catalog-title
    margin-bottom 15px
    font-size 16px
    line-height 1
  .catalog-list
    position relative
    max-height 548px
    overflow-y hidden
    line-height 26px
    font-size 14px
    .catalog-item
      margin-bottom 10px
      padding-left 30px
      .catalog_num
        float left
        margin-left -30px
        color #ccc
      span
        color #999
        cursor pointer
        &:hover
          color #000
</style>
