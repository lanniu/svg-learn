<template>
  <svg ref="canvas" :viewBox="`${translateX} ${translateY} ${100 * scale} ${100 * scale}`"
       @mousedown="handleMouseDown"
       @mousemove="handleMouseMove"
       @mouseup="handleMouseUp"
       @wheel="handleWheel">
    <svg-wrapper :tag-data="tagData"></svg-wrapper>
  </svg>
</template>

<script setup>
import {ref, watch} from 'vue'
import SvgWrapper from './svg-wrapper.vue'

const tagData = ref([
  {
    name: 'path',
    attrs: {
      fill: 'none',
      stroke: 'lightgrey',
      d: 'M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z'
    }
  },
  {
    name: 'circle',
    attrs: {
      r: '5',
      fill: 'red',
    },
    children: [
      {
        name: 'animateMotion',
        attrs: {
          dur: '10s',
          repeatCount: 'indefinite',
          path: 'M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z'
        }
      }
    ]
  },
  {
    name: 'circle',
    attrs: {
      cx: 50,
      cy: 50,
      r: 20,
    },
    children: [
      {
        name: 'animate',
        attrs: {
          attributeName: 'r',
          values: '10;20;10',
          dur: '10s',
          repeatCount: 'indefinite'
        }
      },
      {
        name: 'animateTransform',
        attrs: {
          attributeName: 'transform',
          attributeType: 'XML',
          type: 'translate',
          from: '0 0',
          to: '50 0',
          dur: '10s',
          repeatCount: 'indefinite'
        }
      }
    ]
  },
  {
    name: 'circle',
    attrs: {
      cx: 150,
      cy: 50,
      r: 20,
    },
    children: [
      {
        name: 'animate',
        attrs: {
          attributeName: 'r',
          values: '10;20;10',
          dur: '10s',
          repeatCount: 'indefinite'
        }
      }
    ]
  },
  {
    name: 'circle',
    attrs: {
      id: 'circle1',
      cx: 50,
      cy: 100,
      r: 10
    }
  },
  {
    name: 'use',
    attrs: {
      href: '#circle1',
      x: 50,
      fill: 'orange'
    }
  },
  {
    name: 'use',
    attrs: {
      href: '#circle1',
      x: 100,
      fill: 'red'
    }
  }
])

const canvas = ref(null)
const isDragging = ref(false)
const startX = ref(0)
const startY = ref(0)
const translateX = ref(0)
const translateY = ref(0)
const scale = ref(2)

const handleMouseDown = (event) => {
  isDragging.value = true
  startX.value = event.clientX
  startY.value = event.clientY
}

const handleMouseMove = (event) => {
  if (isDragging.value) {
    const deltaX = event.clientX - startX.value
    const deltaY = event.clientY - startY.value

    let tmp = scale.value

    if (tmp > 1) {
      tmp /= 10
    } else {
      tmp *= 10
    }

    translateX.value -= deltaX / tmp
    translateY.value -= deltaY / tmp

    startX.value = event.clientX
    startY.value = event.clientY
  }
}

const handleMouseUp = () => {
  isDragging.value = false
}

const handleWheel = (event) => {
  event.preventDefault()

  const delta = event.deltaY
  const scaleFactor = delta > 0 ? 1.05 : 0.95
  scale.value *= scaleFactor
}
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}
</style>
