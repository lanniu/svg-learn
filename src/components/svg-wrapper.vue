<template xmlns:svg="http://www.w3.org/1999/xhtml">
  <template v-for="(tag, index) in tagData" :key="`${tag}_${index}`">
    <template v-if="tag.name === 'a'">
      <a v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </a>
    </template>
    <template v-if="tag.name === 'animate'">
      <animate v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </animate>
    </template>
    <template v-if="tag.name === 'animateMotion'">
      <animateMotion v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </animateMotion>
    </template>
    <template v-if="tag.name === 'animateTransform'">
      <animateTransform v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </animateTransform>
    </template>
    <template v-if="tag.name === 'circle'">
      <circle v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </circle>
    </template>
    <template v-if="tag.name === 'clipPath'">
      <clipPath v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </clipPath>
    </template>
    <template v-if="tag.name === 'defs'">
      <defs v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </defs>
    </template>
    <template v-if="tag.name === 'desc'">
      <desc v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </desc>
    </template>
    <template v-if="tag.name === 'discard'">
      <discard v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </discard>
    </template>
    <template v-if="tag.name === 'ellipse'">
      <ellipse v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </ellipse>
    </template>
    <template v-if="tag.name === 'feBlend'">
      <feBlend v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feBlend>
    </template>
    <template v-if="tag.name === 'feColorMatrix'">
      <feColorMatrix v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feColorMatrix>
    </template>
    <template v-if="tag.name === 'feComponentTransfer'">
      <feComponentTransfer v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feComponentTransfer>
    </template>
    <template v-if="tag.name === 'feComposite'">
      <feComposite v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feComposite>
    </template>
    <template v-if="tag.name === 'feConvolveMatrix'">
      <feConvolveMatrix v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feConvolveMatrix>
    </template>
    <template v-if="tag.name === 'feDiffuseLighting'">
      <feDiffuseLighting v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feDiffuseLighting>
    </template>
    <template v-if="tag.name === 'feDisplacementMap'">
      <feDisplacementMap v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feDisplacementMap>
    </template>
    <template v-if="tag.name === 'feDistantLight'">
      <feDistantLight v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feDistantLight>
    </template>
    <template v-if="tag.name === 'feDropShadow'">
      <feDropShadow v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feDropShadow>
    </template>
    <template v-if="tag.name === 'feFlood'">
      <feFlood v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feFlood>
    </template>
    <template v-if="tag.name === 'feFuncA'">
      <feFuncA v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feFuncA>
    </template>
    <template v-if="tag.name === 'feFuncB'">
      <feFuncB v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feFuncB>
    </template>
    <template v-if="tag.name === 'feFuncG'">
      <feFuncG v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feFuncG>
    </template>
    <template v-if="tag.name === 'feFuncR'">
      <feFuncR v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feFuncR>
    </template>
    <template v-if="tag.name === 'feGaussianBlur'">
      <feGaussianBlur v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feGaussianBlur>
    </template>
    <template v-if="tag.name === 'feImage'">
      <feImage v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feImage>
    </template>
    <template v-if="tag.name === 'feMerge'">
      <feMerge v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feMerge>
    </template>
    <template v-if="tag.name === 'feMergeNode'">
      <feMergeNode v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feMergeNode>
    </template>
    <template v-if="tag.name === 'feMorphology'">
      <feMorphology v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feMorphology>
    </template>
    <template v-if="tag.name === 'feOffset'">
      <feOffset v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feOffset>
    </template>
    <template v-if="tag.name === 'fePointLight'">
      <fePointLight v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </fePointLight>
    </template>
    <template v-if="tag.name === 'feSpecularLighting'">
      <feSpecularLighting v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feSpecularLighting>
    </template>
    <template v-if="tag.name === 'feSpotLight'">
      <feSpotLight v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feSpotLight>
    </template>
    <template v-if="tag.name === 'feTile'">
      <feTile v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feTile>
    </template>
    <template v-if="tag.name === 'feTurbulence'">
      <feTurbulence v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </feTurbulence>
    </template>
    <template v-if="tag.name === 'filter'">
      <filter v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </filter>
    </template>
    <template v-if="tag.name === 'foreignObject'">
      <foreignObject v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </foreignObject>
    </template>
    <template v-if="tag.name === 'g'">
      <g v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </g>
    </template>
    <template v-if="tag.name === 'image'">
      <image v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </image>
    </template>
    <template v-if="tag.name === 'line'">
      <line v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </line>
    </template>
    <template v-if="tag.name === 'linearGradient'">
      <linearGradient v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </linearGradient>
    </template>
    <template v-if="tag.name === 'marker'">
      <marker v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </marker>
    </template>
    <template v-if="tag.name === 'mask'">
      <mask v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </mask>
    </template>
    <template v-if="tag.name === 'metadata'">
      <metadata v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </metadata>
    </template>
    <template v-if="tag.name === 'mpath'">
      <mpath v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </mpath>
    </template>
    <template v-if="tag.name === 'path'">
      <path v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </path>
    </template>
    <template v-if="tag.name === 'pattern'">
      <pattern v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </pattern>
    </template>
    <template v-if="tag.name === 'polygon'">
      <polygon v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </polygon>
    </template>
    <template v-if="tag.name === 'polyline'">
      <polyline v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </polyline>
    </template>
    <template v-if="tag.name === 'radialGradient'">
      <radialGradient v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </radialGradient>
    </template>
    <template v-if="tag.name === 'rect'">
      <rect v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </rect>
    </template>
    <template v-if="tag.name === 'set'">
      <set v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </set>
    </template>
    <template v-if="tag.name === 'stop'">
      <stop v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </stop>
    </template>
    <template v-if="tag.name === 'switch'">
      <switch v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </switch>
    </template>
    <template v-if="tag.name === 'symbol'">
      <symbol v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </symbol>
    </template>
    <template v-if="tag.name === 'text'">
      <text v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </text>
    </template>
    <template v-if="tag.name === 'textPath'">
      <textPath v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </textPath>
    </template>
    <template v-if="tag.name === 'title'">
      <title v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
        <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </title>
    </template>
    <template v-if="tag.name === 'tspan'">
      <tspan v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </tspan>
    </template>
    <template v-if="tag.name === 'use'">
      <use v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </use>
    </template>
    <template v-if="tag.name === 'view'">
      <view v-bind="tag.attrs">
        <template v-if="tag.children instanceof Array">
          <svg-wrapper :tag-data="tag.children"></svg-wrapper>
        </template>
      </view>
    </template>
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

</style>