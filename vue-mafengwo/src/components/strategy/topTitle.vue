<template>
  <div class="top-title">
    <h1>{{strategyItemInfo.title}}</h1>
    <div class="sub-title">
      <i class="i-zan"></i>
      {{strategyItemInfo.ExperiencedCount}}人体验过
      <span class="min-item">
        <em>阅读{{strategyItemInfo.readCount}}</em>
      </span>
      <span class="min-item">
        {{strategyItemInfo.typeStrategy}}
        <em>{{strategyItemInfo.date}}</em>
      </span>
    </div>
    <div class="userbox clearfix" v-if="strategyItemInfo.userInfo">
      <div class="author">
        <img v-lazy="strategyItemInfo.userInfo.img" alt="" width="90" height="90">
      </div>
      <div class="info">
        <div class="in-t">
          <span class="name">{{strategyItemInfo.userInfo.name}}</span>
          <span class="rz">
            <i></i>
            {{strategyItemInfo.userInfo.authentication}}
          </span>
        </div>
        <p>{{strategyItemInfo.userInfo.introduce}}</p>
      </div>
      <div class="contact">
        <i></i>
        <p>联系当地管家</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topTitle',
  inject: {
    strategyItemInfo: {
      default: null
    }
  }
}
</script>

<style scoped lang='stylus'>
.top-title
  h1
    font-size 30px
    color #333
    line-height 40px
    padding-bottom 16px
    border-bottom 1px solid #e5e5e5
    word-wrap break-word
    font-weight bold
  .sub-title
    overflow hidden
    color #333
    font-size 14px
    padding 13px 0 0
    margin-bottom 35px
    line-height 22px
    i.i-zan
      float left
      width 20px
      height 22px
      background url(../../assets/images/list_sprites7.png) no-repeat -35px -61px
      margin 0 7px 0 5px
    .min-item
      float right
      color #999
      font-size 14px
      &+.min-item
        margin-right 20px
      em
        font-style normal
        margin-left 10px
  .userbox
    padding 16px 0
    color #333
    border 1px solid #e5e5e5
    margin 25px 0 35px
    .author
      margin-left 15px
      width 90px
      height 90px
      float left
      border-radius 50%
      overflow hidden
    .info
      width 420px
      float left
      padding 0 20px
      .in-t
        color #333
        line-height 20px
        .name
          font-size 16px
        .rz
          display inline-block
          margin-left 12px
          padding 0 5px 0 13px
          line-height 14px
          border 1px solid #ff9d00
          color #f2912e
          font-size 12px
          border-radius 2px
          vertical-align top
          white-space nowrap
          i
            position absolute
            margin -4px 0 0 -24px
            display inline-block
            width 22px
            height 22px
            overflow hidden
            background url(../../assets/images/list_sprites7.png) no-repeat -100px -40px
      p
        color #333
        font-size 14px
        height 60px
        line-height 20px
        overflow hidden
        margin 6px 0 8px 0
    .contact
      width 110px
      height 96px
      border-left 1px solid #e5e5e5
      float left
      text-align center
      i
        width 32px
        height 32px
        background url(../../assets/images/list_sprites7.png) no-repeat 0 -61px
        display block
        margin 18px auto 0
      p
        font-size 14px
        padding 12px 0
        color #333
        line-height 26px
</style>
