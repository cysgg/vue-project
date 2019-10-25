<template>
  <div>
    <div class="item">
      <div class="sub-title">
        {{travelTitle}}
      </div>
      <div class="item-body">
        <div
          class="col"
          v-for="(item, index) in travelList"
          :key="index"
          >
          <div class="col-char">
            {{item.letter}}
          </div>
          <div class="col-areas">
            <div
              class="area"
              v-for="area in item.areas"
              :key="area.eName"
            >
              {{area.cName}}
              <span class="en">{{area.eName}}</span>
              <i v-if="area.hot" class="icon-label"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'travelList',
  props: {
    travelList: {
      type: Array
    },
    travelTitle: {
      type: String
    }
  }
}
</script>

<style scoped lang="stylus">
.item
  margin-bottom 50px
  overflow hidden
  .sub-title
    margin-bottom 15px
    font-size 20px
    line-height 22px
  .item-body
      -moz-column-count 3
      -webkit-column-count 3
      column-count 3
      -moz-column-gap 21px
      -webkit-column-gap 21px
      column-gap 21px
    .col
      display inline
      font-size 14px
      line-height 30px
      .col-char
        float left
        width 30px
        overflow hidden
        display inline
        font-size 20px
        font-family 'Centaur', 'Times New Roman'
        text-transform uppercase
      .col-areas
        margin-left 30px
        .area
          width 282px
          .en
            color #a8a8a8
            font-family Arial
            word-wrap break-word
            word-break normal
          .icon-label
            position absolute
            margin 8px 0 0 5px
            width 32px
            height 14px
            background url('../../assets/images/plaInd-sprite3.png') no-repeat -555px 0
            font-size 14px
            color #fff
            font-weight bold
            line-height 100px
            overflow hidden
            vertical-align top
</style>
