<template>
  <svg
    class="line_class"
    aria-hidden="true"
    v-on="$listeners"
    :width="svgWidth"
    :height="svgHeight"
    >
    <line
      :x1="svgWidth / 2 - strokeWidth / 2"
      :y1="0"
      :x2="svgWidth / 2 - strokeWidth / 2"
      :y2="svgHeight"
      :stroke="defaultColor"
      :stroke-width="strokeWidth"
      stroke-linejoin="round"
      stroke-linecap="round"
      fill="none"
    />
    <line
      :x1="svgWidth / 2 - strokeWidth / 2"
      :y1="0"
      :x2="svgWidth / 2 - strokeWidth / 2"
      :y2="endy"
      :stroke-width="strokeWidth"
      :stroke="loadingColor"
      stroke-linejoin="round"
      stroke-linecap="round"
      fill="none"
    />
    <circle
      :cx="svgWidth / 2 - strokeWidth / 2"
      :cy="endy"
      r="6"
      :fill="loadingColor"
    />
  </svg>
</template>

<script>
export default {
  name: 'lineload',
  props: {
    svgWidth: {
      type: Number,
      default: 60
    },
    svgHeight: {
      type: Number,
      default: 60
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
      default: '#ff9d00'
    },
    endNum: {
      type: Number
    },
    nowNum: {
      type: Number
    }
  },
  computed: {
    endy () {
      if (!this.endNum) {
        return 0
      }
      return (this.nowNum / this.endNum) * this.svgHeight
    }
  }
}
</script>

<style scoped lang='stylus'>
</style>
