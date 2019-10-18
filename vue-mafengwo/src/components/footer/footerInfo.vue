<template>
  <div class="ft-info">
    <div class="ft-info-col ft-info-intro">
      <div class="dt">马蜂窝旅游网</div>
      <div class="dd">中国年轻一代用得更多的旅游网站</div>
      <div class="dd">上亿旅行者共同打造的 <strong>"旅行神器"</strong></div>
      <div class="dd"><strong>60,000</strong> 多个全球旅游目的地</div>
      <div class="dd"><strong>600,000</strong> 个细分目的地新玩法</div>
      <div class="dd"><strong>760,000,000</strong> 次攻略下载</div>
      <div class="dd"><strong>38,000</strong>  家旅游产品供应商</div>
    </div>
    <div class="ft-info-col ft-info-about">
      <div class="dt">关于我们</div>
      <div class="dd">
        <router-link to="" tag="a">关于马蜂窝</router-link>
        <router-link to="" tag="a" class="m_1_10">联系我们</router-link>
      </div>
      <div class="dd">
        <router-link to="" tag="a">隐私政策</router-link>
        <router-link to="" tag="a" class="m_1_10">商标声明</router-link>
      </div>
      <div class="dd">
        <router-link to="" tag="a">服务协议</router-link>
      </div>
      <div class="dd">
        <router-link to="" tag="a">商城平台服务协议</router-link>
      </div>
      <div class="dd">
        <router-link to="" tag="a">网络信息侵权通知指引</router-link>
      </div>
      <div class="dd" style="white-space: nowrap;">
        <router-link to="" tag="a">马蜂窝旅游网服务监督员</router-link>
      </div>
      <div class="dd">
        <router-link to="" tag="a">网站地图</router-link>
        <router-link to="" tag="a" class="m_1_10 highlight">加入马蜂窝</router-link>
      </div>
    </div>
    <div class="ft-info-col ft-info-service">
      <div class="dt">旅行服务</div>
      <div class="dd">
        <ul>
          <li>
            <router-link to="" tag="a">旅游攻略</router-link>
          </li>
          <li>
            <router-link to="" tag="a">酒店预订</router-link>
          </li>
          <li>
            <router-link to="" tag="a">旅游特价</router-link>
          </li>
          <li>
            <router-link to="" tag="a">国际租车</router-link>
          </li>
          <li>
            <router-link to="" tag="a">旅游问答</router-link>
          </li>
          <li>
            <router-link to="" tag="a">旅游保险</router-link>
          </li>
          <li>
            <router-link to="" tag="a">旅游指南</router-link>
          </li>
          <li>
            <router-link to="" tag="a">订火车票</router-link>
          </li>
          <li>
            <router-link to="" tag="a">旅游资讯</router-link>
          </li>
          <li>
            <router-link to="" tag="a">APP下载</router-link>
          </li>
          <li style="width: 120px;">
            <router-link to="" tag="a">旅行商城全球商家入驻</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="ft-info-col ft-info-qrcode">
      <div class="dd">
        <span class="ft-qrcode-tejia"></span>
        <p>马蜂窝良品<br>官方服务号</p>
      </div>
      <div class="dd">
        <span class="ft-qrcode-weixin"></span>
        <p>马蜂窝旅游<br>订阅号</p>
      </div>
      <div class="dd">
        <span class="ft-qrcode-app"></span>
        <p>马蜂窝APP<br>扫描立即下载</p>
      </div>
    </div>
    <div class="ft-info-social">
      <div class="dt">旅游之前，先上马蜂窝</div>
      <div class="dd">
        <router-link to="" tag="a" class="ft-social-weibo">
          <i class="ft-social-icon"></i>
        </router-link>
        <router-link to="" tag="a" class="ft-social-qqt">
          <i class="ft-social-icon"></i>
        </router-link>
        <router-link to="" tag="a" class="ft-social-qzone">
          <i class="ft-social-icon"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerInfo'
}
</script>

<style scoped lang="stylus">
.highlight
  color $theme_color !important
.ft-info
  padding 30px 8px 40px 8px
  border-bottom 1px solid #575a5b
  overflow hidden
  a:hover
    color #fff !important
  .ft-info-intro
    width 200px
    margin-right 68px
  .ft-info-col
    float left
    display inline
    a
      color #c2c2c2
      &.m_1_10
        margin-left 10px
  .dt
    height 30px
    font-size 14px
    overflow hidden
  .dd
    strong
      color $theme_color
      font-weight normal
  .ft-info-about
    width 128px
    margin-right 85px
  .ft-info-service
    width 135px
    margin-right 80px
    .dt
      text-align center
    .dd
      width 100%
      overflow hidden
      ul
        margin-right -35px
        li
          float left
          width 85px
  .ft-info-qrcode
    float right
    padding-top 22px
    line-height 1.4em
    .dd
      width 100px
      display inline
      margin-left 30px
      float right
      text-align center
      span
        display block
        height 90px
        margin 0 0 8px 6px
      .ft-qrcode-tejia
        background url('../../assets/images/qr_tejia4.png') no-repeat
      .ft-qrcode-weixin
        background url('../../assets/images/qr_mfw4.gif') no-repeat
      .ft-qrcode-app
        background url('../../assets/images/mfw_app.png') no-repeat
  .ft-info-social
    clear both
    text-align center
    padding-top 25px
    .dt
      font-size 16px
    .dd
      padding 5px 0
      a
        display inline
        margin 0 6px
        i
          display inline-block
          width 28px
          height 28px
          background url('../../assets/images/mfw_logo4.png') no-repeat 0 0
          overflow hidden
      .ft-social-qqt
        i
          background-position -30px 0
      .ft-social-qzone
        i
          background-position -60px 0
</style>
