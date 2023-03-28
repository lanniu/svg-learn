import DescMap from './desc'

// 核心属性
export const core = [
    {
        name: 'id',
        valueType: 'string',
        default: 'id_1',
        desc: DescMap['id'],
        href: 'https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/id'
    }
]


// 条件处理属性
export const cond = [
    {
        name: 'systemLanguage',
        valueType: 'stringList',
        default: ['mi', 'en'],
        desc: DescMap['systemLanguage'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/systemLanguage'
    }
]

// 图像事件属性
export const graphicEvent = [
    {
        name: 'onactivate',
        valueType: 'function',
        default: () => console.info('onactivate'),
        desc: DescMap['onactivate'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onfocusin',
        valueType: 'function',
        default: () => console.info('onfocusin'),
        desc: DescMap['onfocusin'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onfocusout',
        valueType: 'function',
        default: () => console.info('onfocusout'),
        desc: DescMap['onfocusout'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    }
]

// 样式属性
export const styling = [
    {
        name: 'class',
        valueType: 'string',
        default: 'class_1',
        desc: DescMap['class'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/class'
    },
    {
        name: 'style',
        valueType: 'string',
        default: 'fill: skyblue; stroke: cadetblue; stroke-width: 2;',
        desc: DescMap['style'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/style'
    }
]

export const presentation = [
    {
        name: 'alignment-baseline',
        valueType: 'range',
        default: ['auto', 'baseline', 'before-edge', 'text-before-edge', 'middle', 'central', 'after-edge', 'text-after-edge', 'ideographic', 'alphabetic', 'hanging', 'mathematical', 'inherit',],
        desc: DescMap['alignment-baseline'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline'
    },
    {
        name: 'baseline-shift',
        valueType: 'range',
        default: ['auto', 'baseline', 'super', 'sub', '<percentage>', '<length>', 'inherit',],
        desc: DescMap['baseline-shift'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift'
    },
    {
        name: 'clip',
        valueType: 'range',
        default: ['auto', '<shape>', 'inherit',],
        desc: DescMap['clip'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip'
    },
    {
        name: 'clip-path',
        valueType: 'range',
        default: ['none', '<FuncIRI>', 'inherit',],
        desc: DescMap['clip-path'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-path'
    },
    {
        name: 'clip-rule',
        valueType: 'range',
        default: ['nonzero', 'evenodd', 'inherit',],
        desc: DescMap['clip-rule'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule'
    },
    {
        name: 'color',
        valueType: 'range',
        default: ['<color>', 'inherit',],
        desc: DescMap['color'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color'
    },
    {
        name: 'color-interpolation',
        valueType: 'range',
        default: ['auto', 'sRGB', 'linearRGB', 'inherit',],
        desc: DescMap['color-interpolation'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation'
    },
    {
        name: 'color-interpolation-filters',
        valueType: 'range',
        default: ['auto', 'sRGB', 'linearRGB', 'inherit',],
        desc: DescMap['color-interpolation-filters'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation-filters'
    },
    {
        name: 'color-profile',
        valueType: 'range',
        default: ['auto', 'sRGB', 'linearRGB', '<name>', '<IRI>', 'inherit',],
        desc: DescMap['color-profile'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-profile'
    },
    {
        name: 'cursor',
        valueType: 'range',
        default: ['<FuncIRI>', '<keywords>', 'inherit',],
        desc: DescMap['cursor'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cursor'
    },
    {
        name: 'd',
        valueType: 'range',
        default: ['<path()>'],
        desc: DescMap['d'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d'
    },
    {
        name: 'direction',
        valueType: 'range',
        default: ['ltr', 'rtl', 'inherit',],
        desc: DescMap['direction'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/direction'
    },
    {
        name: 'display',
        valueType: 'range',
        default: ['<display>'],
        desc: DescMap['display'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/display'
    },
    {
        name: 'dominant-baseline',
        valueType: 'range',
        default: ['auto', 'text-bottom', 'alphabetic', 'ideographic', 'middle', 'central', 'mathematical', 'hanging', 'text-top',],
        desc: DescMap['dominant-baseline'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline'
    },
    {
        name: 'enable-background',
        valueType: 'range',
        default: ['accumulate', 'new', 'inherit',],
        desc: DescMap['enable-background'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/enable-background'
    },
    {
        name: 'fill',
        valueType: 'range',
        default: ['<paint>'],
        desc: DescMap['fill'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill'
    },
    {
        name: 'fill-opacity',
        valueType: 'range',
        default: ['<number>', '<percentage>',],
        desc: DescMap['fill-opacity'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-opacity'
    },
    {
        name: 'fill-rule',
        valueType: 'range',
        default: ['nonzero', 'evenodd', 'inherit',],
        desc: DescMap['fill-rule'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule'
    },
    {
        name: 'filter',
        valueType: 'range',
        default: ['<paint>',],
        desc: DescMap['filter'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filter'
    },
    {
        name: 'flood-color',
        valueType: 'range',
        default: ['<color>',],
        desc: DescMap['flood-color'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-color'
    },
    {
        name: 'flood-opacity',
        valueType: 'range',
        default: ['<number>', '<percentage>',],
        desc: DescMap['flood-opacity'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-opacity'
    },
    {
        name: 'font-family',
        valueType: 'range',
        default: ['<font-family>',],
        desc: DescMap['font-family'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-family'
    },
    {
        name: 'font-size',
        valueType: 'range',
        default: ['<font-size>',],
        desc: DescMap['font-size'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-size'
    },
    {
        name: 'font-size-adjust',
        valueType: 'range',
        default: ['<number>', 'none', 'inherit',],
        desc: DescMap['font-size-adjust'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-size-adjust'
    },
    {
        name: 'font-stretch',
        valueType: 'range',
        default: ['<font-stretch>',],
        desc: DescMap['font-stretch'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-stretch'
    },
    {
        name: 'font-style',
        valueType: 'range',
        default: ['normal', 'italic', 'oblique',],
        desc: DescMap['font-style'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-style'
    },
    {
        name: 'font-variant',
        valueType: 'range',
        default: ['<font-variant>',],
        desc: DescMap['font-variant'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-variant'
    },
    {
        name: 'font-weight',
        valueType: 'range',
        default: ['normal', 'bold', 'lighter', 'bolder', '100', '200', '300', '400', '500', '600', '700', '800', '900',],
        desc: DescMap['font-weight'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-weight'
    },
    {
        name: 'glyph-orientation-horizontal',
        valueType: 'range',
        default: ['<angle>', 'inherit',],
        desc: DescMap['glyph-orientation-horizontal'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/glyph-orientation-horizontal'
    },
    {
        name: 'glyph-orientation-vertical',
        valueType: 'range',
        default: ['auto', '<angle>', 'inherit',],
        desc: DescMap['glyph-orientation-vertical'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/glyph-orientation-vertical'
    },
    {
        name: 'image-rendering',
        valueType: 'range',
        default: ['auto', 'optimizeQuality', 'optimizeSpeed',],
        desc: DescMap['image-rendering'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/image-rendering'
    },
    {
        name: 'kerning',
        valueType: 'range',
        default: ['auto', '<length>', 'inherit',],
        desc: DescMap['kerning'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/kerning'
    },
    {
        name: 'letter-spacing',
        valueType: 'range',
        default: ['normal', '<length>', 'inherit',],
        desc: DescMap['letter-spacing'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/letter-spacing'
    },
    {
        name: 'lighting-color',
        valueType: 'range',
        default: ['<color>',],
        desc: DescMap['lighting-color'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lighting-color'
    },
    {
        name: 'marker-end',
        valueType: 'range',
        default: ['<FuncIRI>', 'none', 'inherit',],
        desc: DescMap['marker-end'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-end'
    },
    {
        name: 'marker-mid',
        valueType: 'range',
        default: ['<FuncIRI>', 'none', 'inherit',],
        desc: DescMap['marker-mid'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-mid'
    },
    {
        name: 'marker-start',
        valueType: 'range',
        default: ['<FuncIRI>', 'none', 'inherit',],
        desc: DescMap['marker-start'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-start'
    },
    {
        name: 'mask',
        valueType: 'range',
        default: ['<mask>',],
        desc: DescMap['mask'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mask'
    },
    {
        name: 'opacity',
        valueType: 'range',
        default: ['<opacity-value>',],
        desc: DescMap['opacity'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/opacity'
    },
    {
        name: 'overflow',
        valueType: 'range',
        default: ['visible', 'hidden|scroll', 'auto', 'inherit',],
        desc: DescMap['overflow'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/overflow'
    },
    {
        name: 'pointer-events',
        valueType: 'range',
        default: ['bounding-box', 'visiblePainted', 'visibleFill', 'visibleStroke', 'visible', 'painted', 'fill', 'stroke', 'all', 'none',],
        desc: DescMap['pointer-events'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pointer-events'
    },
    {
        name: 'shape-rendering',
        valueType: 'range',
        default: ['auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision', 'inherit',],
        desc: DescMap['shape-rendering'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering'
    },
    {
        name: 'solid-color',
        valueType: 'range',
        default: [],
        desc: DescMap['solid-color'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/solid-color'
    },
    {
        name: 'solid-opacity',
        valueType: 'range',
        default: [],
        desc: DescMap['solid-opacity'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/solid-opacity'
    },
    {
        name: 'stop-color',
        valueType: 'range',
        default: ['currentcolor', '<color>', '<icccolor>', 'inherit',],
        desc: DescMap['stop-color'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-color'
    },
    {
        name: 'stop-opacity',
        valueType: 'range',
        default: ['<opacity-value>', 'inherit',],
        desc: DescMap['stop-opacity'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-opacity'
    },
    {
        name: 'stroke',
        valueType: 'range',
        default: ['<paint>',],
        desc: DescMap['stroke'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke'
    },
    {
        name: 'stroke-dasharray',
        valueType: 'range',
        default: ['none', '<dasharray>',],
        desc: DescMap['stroke-dasharray'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray'
    },
    {
        name: 'stroke-dashoffset',
        valueType: 'range',
        default: ['<percentage>', '<length>',],
        desc: DescMap['stroke-dashoffset'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset'
    },
    {
        name: 'stroke-linecap',
        valueType: 'range',
        default: ['butt', 'round', 'square',],
        desc: DescMap['stroke-linecap'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap'
    },
    {
        name: 'stroke-linejoin',
        valueType: 'range',
        default: ['arcs', 'bevel', 'miter', 'miter-clip', 'round',],
        desc: DescMap['stroke-linejoin'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin'
    },
    {
        name: 'stroke-miterlimit',
        valueType: 'range',
        default: ['<number>',],
        desc: DescMap['stroke-miterlimit'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit'
    },
    {
        name: 'stroke-opacity',
        valueType: 'range',
        default: ['<opacity-value>', '<percentage>',],
        desc: DescMap['stroke-opacity'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-opacity'
    },
    {
        name: 'stroke-width',
        valueType: 'range',
        default: ['<length>', '<percentage>',],
        desc: DescMap['stroke-width'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width'
    },
    {
        name: 'text-anchor',
        valueType: 'range',
        default: ['start', 'middle', 'end', 'inherit',],
        desc: DescMap['text-anchor'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor'
    },
    {
        name: 'text-decoration',
        valueType: 'range',
        default: ['none', 'underline', 'overline', 'line-through', 'blink', 'inherit',],
        desc: DescMap['text-decoration'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-decoration'
    },
    {
        name: 'text-rendering',
        valueType: 'range',
        default: ['auto', 'optimizeSpeed', 'optimizeLegibility', 'geometricPrecision', 'inherit',],
        desc: DescMap['text-rendering'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-rendering'
    },
    {
        name: 'transform',
        valueType: 'range',
        default: ['<transform-list>',],
        desc: DescMap['transform'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform'
    },
    {
        name: 'unicode-bidi',
        valueType: 'range',
        default: [],
        desc: DescMap['unicode-bidi'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/unicode-bidi'
    },
    {
        name: 'vector-effect',
        valueType: 'range',
        default: ['default', 'non-scaling-stroke', 'inherit', '<uri>',],
        desc: DescMap['vector-effect'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect'
    },
    {
        name: 'visibility',
        valueType: 'range',
        default: ['visible', 'hidden', 'collapse', 'inherit',],
        desc: DescMap['visibility'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/visibility'
    },
    {
        name: 'word-spacing',
        valueType: 'range',
        default: ['<length>', 'inherit',],
        desc: DescMap['word-spacing'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/word-spacing'
    },
    {
        name: 'writing-mode',
        valueType: 'range',
        default: ['lr-tb', 'rl-tb', 'tb-rl', 'lr', 'rl', 'tb', 'inherit',],
        desc: DescMap['writing-mode'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/writing-mode'
    },
]

export const docEleEvent = [
    {
        name: 'oncopy',
        valueType: 'function',
        default: () => console.info('oncopy'),
        desc: DescMap['oncopy'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'oncut',
        valueType: 'function',
        default: () => console.info('oncut'),
        desc: DescMap['oncut'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onpaste',
        valueType: 'function',
        default: () => console.info('onpaste'),
        desc: DescMap['onpaste'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
]

export const globalEvent = [
    {
        name: 'oncancel',
        valueType: 'function',
        default: () => console.info('oncancel'),
        desc: DescMap['oncancel'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'oncanplay',
        valueType: 'function',
        default: () => console.info('oncanplay'),
        desc: DescMap['oncanplay'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'oncanplaythrough',
        valueType: 'function',
        default: () => console.info('oncanplaythrough'),
        desc: DescMap['oncanplaythrough'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onchange',
        valueType: 'function',
        default: () => console.info('onchange'),
        desc: DescMap['onchange'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onclick',
        valueType: 'function',
        default: () => console.info('onclick'),
        desc: DescMap['onclick'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onclose',
        valueType: 'function',
        default: () => console.info('onclose'),
        desc: DescMap['onclose'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'oncuechange',
        valueType: 'function',
        default: () => console.info('oncuechange'),
        desc: DescMap['oncuechange'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'ondblclick',
        valueType: 'function',
        default: () => console.info('ondblclick'),
        desc: DescMap['ondblclick'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'ondrag',
        valueType: 'function',
        default: () => console.info('ondrag'),
        desc: DescMap['ondrag'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'ondragend',
        valueType: 'function',
        default: () => console.info('ondragend'),
        desc: DescMap['ondragend'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'ondragenter',
        valueType: 'function',
        default: () => console.info('ondragenter'),
        desc: DescMap['ondragenter'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'ondragleave',
        valueType: 'function',
        default: () => console.info('ondragleave'),
        desc: DescMap['ondragleave'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'ondragover',
        valueType: 'function',
        default: () => console.info('ondragover'),
        desc: DescMap['ondragover'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'ondragstart',
        valueType: 'function',
        default: () => console.info('ondragstart'),
        desc: DescMap['ondragstart'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'ondrop',
        valueType: 'function',
        default: () => console.info('ondrop'),
        desc: DescMap['ondrop'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'ondurationchange',
        valueType: 'function',
        default: () => console.info('ondurationchange'),
        desc: DescMap['ondurationchange'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onemptied',
        valueType: 'function',
        default: () => console.info('onemptied'),
        desc: DescMap['onemptied'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onended',
        valueType: 'function',
        default: () => console.info('onended'),
        desc: DescMap['onended'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onerror',
        valueType: 'function',
        default: () => console.info('onerror'),
        desc: DescMap['onerror'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onfocus',
        valueType: 'function',
        default: () => console.info('onfocus'),
        desc: DescMap['onfocus'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'oninput',
        valueType: 'function',
        default: () => console.info('oninput'),
        desc: DescMap['oninput'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'oninvalid',
        valueType: 'function',
        default: () => console.info('oninvalid'),
        desc: DescMap['oninvalid'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onkeydown',
        valueType: 'function',
        default: () => console.info('onkeydown'),
        desc: DescMap['onkeydown'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onkeypress',
        valueType: 'function',
        default: () => console.info('onkeypress'),
        desc: DescMap['onkeypress'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onkeyup',
        valueType: 'function',
        default: () => console.info('onkeyup'),
        desc: DescMap['onkeyup'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onload',
        valueType: 'function',
        default: () => console.info('onload'),
        desc: DescMap['onload'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onloadeddata',
        valueType: 'function',
        default: () => console.info('onloadeddata'),
        desc: DescMap['onloadeddata'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onloadedmetadata',
        valueType: 'function',
        default: () => console.info('onloadedmetadata'),
        desc: DescMap['onloadedmetadata'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onloadstart',
        valueType: 'function',
        default: () => console.info('onloadstart'),
        desc: DescMap['onloadstart'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onmousedown',
        valueType: 'function',
        default: () => console.info('onmousedown'),
        desc: DescMap['onmousedown'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onmouseenter',
        valueType: 'function',
        default: () => console.info('onmouseenter'),
        desc: DescMap['onmouseenter'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onmouseleave',
        valueType: 'function',
        default: () => console.info('onmouseleave'),
        desc: DescMap['onmouseleave'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onmousemove',
        valueType: 'function',
        default: () => console.info('onmousemove'),
        desc: DescMap['onmousemove'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onmouseout',
        valueType: 'function',
        default: () => console.info('onmouseout'),
        desc: DescMap['onmouseout'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onmouseover',
        valueType: 'function',
        default: () => console.info('onmouseover'),
        desc: DescMap['onmouseover'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onmouseup',
        valueType: 'function',
        default: () => console.info('onmouseup'),
        desc: DescMap['onmouseup'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onmousewheel',
        valueType: 'function',
        default: () => console.info('onmousewheel'),
        desc: DescMap['onmousewheel'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onpause',
        valueType: 'function',
        default: () => console.info('onpause'),
        desc: DescMap['onpause'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onplay',
        valueType: 'function',
        default: () => console.info('onplay'),
        desc: DescMap['onplay'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onplaying',
        valueType: 'function',
        default: () => console.info('onplaying'),
        desc: DescMap['onplaying'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onprogress',
        valueType: 'function',
        default: () => console.info('onprogress'),
        desc: DescMap['onprogress'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onratechange',
        valueType: 'function',
        default: () => console.info('onratechange'),
        desc: DescMap['onratechange'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onreset',
        valueType: 'function',
        default: () => console.info('onreset'),
        desc: DescMap['onreset'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onresize',
        valueType: 'function',
        default: () => console.info('onresize'),
        desc: DescMap['onresize'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onscroll',
        valueType: 'function',
        default: () => console.info('onscroll'),
        desc: DescMap['onscroll'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onseeked',
        valueType: 'function',
        default: () => console.info('onseeked'),
        desc: DescMap['onseeked'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onseeking',
        valueType: 'function',
        default: () => console.info('onseeking'),
        desc: DescMap['onseeking'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onselect',
        valueType: 'function',
        default: () => console.info('onselect'),
        desc: DescMap['onselect'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onshow',
        valueType: 'function',
        default: () => console.info('onshow'),
        desc: DescMap['onshow'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onstalled',
        valueType: 'function',
        default: () => console.info('onstalled'),
        desc: DescMap['onstalled'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onsubmit',
        valueType: 'function',
        default: () => console.info('onsubmit'),
        desc: DescMap['onsubmit'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onsuspend',
        valueType: 'function',
        default: () => console.info('onsuspend'),
        desc: DescMap['onsuspend'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'ontimeupdate',
        valueType: 'function',
        default: () => console.info('ontimeupdate'),
        desc: DescMap['ontimeupdate'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'ontoggle',
        valueType: 'function',
        default: () => console.info('ontoggle'),
        desc: DescMap['ontoggle'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onvolumechange',
        valueType: 'function',
        default: () => console.info('onvolumechange'),
        desc: DescMap['onvolumechange'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
    {
        name: 'onwaiting',
        valueType: 'function',
        default: () => console.info('onwaiting'),
        desc: DescMap['onwaiting'],
        href: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events'
    },
]
