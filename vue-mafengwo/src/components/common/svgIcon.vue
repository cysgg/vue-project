<template>
  <svg
    class="circle_class"
    aria-hidden="true"
    v-on="$listeners"
    :width="svgWidth"
    :height="svgHeight"
    >
    <circle
      :r="svgPosition.r"
      :cy="svgPosition.y"
      :cx="svgPosition.x"
      :stroke-width="strokeWidth"
      :stroke="loadingColor"
      stroke-linejoin="round"
      stroke-linecap="round"
      fill="none"
      :stroke-dashoffset="dashOffset"
      :stroke-dasharray="dashArray"
    />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    svgWidth: {
      type: Number,
      default: 60
    },
    svgHeight: {
      type: Number,
      default: 60
    },
    svgPosition: {
      type: Object,
      default () {
        return {r: 20, y: 30, x: 30}
      },
      validator (val) {
        let keys = Object.getOwnPropertyNames(val)
        return ['x', 'y', 'r'].every(v => keys.includes(v))
      }
    },
    strokeWidth: {
      type: Number,
      default: 2
    },
    defaultColor: {
      type: String,
      default: '#EAEFF4'
    },
    loadingColor: {
      type: String,
      default: '#1593FF'
    },
    endNum: {
      type: Number
    },
    nowNum: {
      type: Number
    }
  },
  computed: {
    dashArray () {
      return 2 * Math.PI * this.svgPosition.r + 'px'
    },
    dashOffset () {
      return 2 * Math.PI * this.svgPosition.r * (1 - this.nowNum / this.endNum) + 'px'
    }
  }
}
</script>

<style scoped lang="stylus">
.circle_class
  transform rotate(-90deg)
</style>
