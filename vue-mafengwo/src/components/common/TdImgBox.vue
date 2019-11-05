<template>
  <div class="fc-item" @mousemove="mmHolder" @mouseleave="mlHolder" ref="item">
    <router-link to="">
      <div class="pic">
        <img v-lazy="imgDate.imgUrl" alt="">
      </div>
      <div class="bag-opa"></div>
      <span class="shadow" ref="shadow"></span>
      <div class="info">
        <h2>{{imgDate.region}}</h2>
        <p class="caption">{{imgDate.caption}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { speedC } from '@/utils/speedC'
export default {
  name: 'TdImgBox',
  props: {
    imgDate: {
      type: Object
    }
  },
  data () {
    return {
      mouseXY: {
        mouseX: 0,
        mouseY: 0
      }
    }
  },
  watch: {
    mouseXY (nv) {
      this.drawSpan3d(nv.mouseX, nv.mouseY)
      this.drawItem3d(nv.mouseX, nv.mouseY)
    }
  },
  methods: {
    drawSpan3d (x, y) {
      let deg = 30 + Math.floor((x / 318) * 30)
      let per = 20 + Math.floor((y / 240) * 40)
      this.$refs.shadow.style.backgroundImage = `linear-gradient(${deg}deg, rgba(0, 0, 0, 0.4), transparent ${per}%)`
    },
    drawItem3d (x, y) {
      let fx = (6 - (y / 240) * 12).toFixed(2)
      let fy = (-6 + (x / 318) * 12).toFixed(2)
      this.$refs.item.style.transform = `rotateX(${fx}deg) rotateY(${fy}deg)`
    },
    mmHolder (e) {
      this.mouseXY = { mouseX: e.layerX, mouseY: e.layerY }
    },
    mlHolder () {
      this.leaveHolder()
      this.$refs.item.style.transform = 'rotateX(0deg) rotateY(0deg)'
      this.$refs.shadow.style.backgroundImage = 'linear-gradient(45deg, rgba(0, 0, 0, 0.4), transparent 40%)'
    },
    leaveHolder () {
      speedC(
        {x: this.mouseXY.mouseX, y: this.mouseXY.mouseY},
        {x: 120, y: 159},
        (x, y) => {
          this.drawSpan3d(x, y)
          this.drawItem3d(x, y)
        }
      )
    }
  }
}
</script>

<style scoped lang='stylus'>
.fc-item
  position relative
  transform-style preserve-3d
  will-change transform
  &:after
    position absolute
    content ''
    top 100%
    left 0
    z-index -1
    display block
    height 22px
    width 100%
    background url(../../assets/images/floating-card-shadow.png) no-repeat
    background-size 100%
  .pic
    width 318px
    height 240px
    overflow hidden
    img
      width 318px
      height 240px
  .bag-opa
    width 100%
    height 100%
    position absolute
    left 0
    top 0
    background #000
    opacity .2
    z-index 2
  .shadow
    content ''
    position absolute
    top 0
    bottom 0
    left 0
    height auto
    width 100%
    z-index 1
    background-image linear-gradient(45deg, rgba(0, 0, 0, 0.4), transparent 40%)
    backface-visibility hidden
  .info
    text-align center
    position absolute
    z-index 3
    left 0
    top 50%
    width 100%
    margin-top -30px
    pointer-events none
    transform translateZ(100px) scale(0.9)
    h2
      font-size 30px
      color #fff
      font-weight normal
      text-shadow 2px 2px 2px rgba(0, 0, 0, .8)
      height 40px
    p
      font-size 18px
      color #fff
      text-shadow 2px 2px 2px rgba(0, 0, 0, .8)
</style>
