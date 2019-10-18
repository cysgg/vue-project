<template>
  <div class="ft-links">
    <router-link tag="a" to="" @click.native="toblank('http://china.makepolo.com/')">马可波罗</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.onlylady.com/')">Onlylady女人志</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://trip.elong.com/')">艺龙旅游指南</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.cncn.com')">欣欣旅游网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.8264.com/')">户外运动</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.yue365.com/')">365音乐网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://ishare.iask.sina.com.cn/')">爱问共享资料</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.uzai.com/')">旅游网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.zongheng.com/')">小说网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.xuexila.com/')">学习啦</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.yododo.com')">游多多自助游</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.zhcpic.com/')">问答</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://huoche.mafengwo.cn/')">火车时刻表</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.lvmama.com')">驴妈妈旅游网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.haodou.com/')">好豆美食网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.taoche.com/')">二手车</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.lvye.cn')">绿野户外</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.tuniu.com/')">途牛旅游网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.mapbar.com/')">图吧</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.chnsuv.com')">SUV联合越野</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.uc.cn/')">手机浏览器</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://sh.city8.com/')">上海地图</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.tianqi.com/')">天气预报查询</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.ly.com/')">同程旅游</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.tieyou.com/')">火车票</router-link>
    <router-link tag="a" to="" @click.native="toblank('https://daxue.mafengwo.cn/#/')">马蜂窝大学</router-link>
    <router-link tag="a" to="" @click.native="toblank('https://m.weelv.com')">马尔代夫旅游</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.yunos.com/')">YunOS</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://you.ctrip.com/')">携程旅游</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.jinjiang.com')">锦江旅游</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.huoche.net/')">火车时刻表</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.tripadvisor.cn/')">TripAdvisor</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.tianxun.com/')">天巡网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.mayi.com/')">短租房</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.zuzuche.com')">租租车</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.5fen.com/')">五分旅游网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.zhuna.cn/')">酒店预订</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.ailvxing.com')">爱旅行网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://360.mafengwo.cn/all.php')">旅游</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://vacations.ctrip.com/')">旅游网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.wed114.cn')">wed114结婚网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.chexun.com/')">车讯网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.aoyou.com/')">遨游旅游网</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.91.com/')">手机</router-link>
    <router-link tag="a" to="" @click.native="toblank('http://www.mafengwo.cn/s/link.html')">更多友情链接&gt;&gt;</router-link>
  </div>
</template>

<script>
export default {
  name: 'footerLinks',
  methods: {
    toblank (url) {
      window.open(url)
    }
  }
}
</script>

<style scoped lang="stylus">
.ft-links
  margin-top -1px
  border-top 1px solid #575a5b
  border-bottom 1px solid #575a5b
  padding 17px 0 17px 8px
  a
    display inline-block
    margin-right 12px
    color #c2c2c2
    &:hover
      color #fff
</style>
