const fs = require('fs')

const generate = (...tagList) => {
    if (!(tagList instanceof Array)) {
        return
    }
    let templateContent = ''

    tagList.forEach((tag) => {
        templateContent += `<template v-if="tag.name === '${tag}'">
      <${tag} v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </${tag}>
    </template>`
    })

    const file = `<template>
  <template v-for="(tag, index) in tagData" :key="\`\${tag}_\${index}\`">
    ${templateContent}
  </template>
</template>

<script setup>
import {ref, defineProps, computed} from 'vue'

defineProps({
  tagData: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>

</style>`

    fs.writeFileSync('./svg-wrapper.vue', file)
}

generate('a', 'animate', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'defs', 'desc', 'discard', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',  'set', 'stop',  'switch', 'symbol', 'text', 'textPath', 'title', 'tspan', 'use', 'view',)

