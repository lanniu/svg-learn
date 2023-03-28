const fs = require('fs')
const generate_attr = (attrStr, type, hrefGenFunc) => {
    const attrList = attrStr.split(',')

    let content = ''

    attrList.forEach(attr => {
        attr = attr.trim()

        const getDefault = () => {
            if (type === 'function') {
                return `() => console.info('${attr}')`
            }
            if (type === 'range') {
                return '[]'
            }
        }

        const template = `{
        name: '${attr}',
        valueType: '${type}',
        default: ${getDefault()},
        desc: DescMap['${attr}'],
        href: '${hrefGenFunc(attr)}'
    },\n`
        content += template
    })

    fs.writeFileSync('./attr.txt', content)
}

generate_attr_handle = (attrStr) => {
    generate_attr(attrStr, 'range', (attr) => `https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/${attr}`)
}

generate_attr_handle('alignment-baseline,baseline-shift,clip,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,cursor,d,direction,display,dominant-baseline,enable-background,fill,fill-opacity,fill-rule,filter,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,glyph-orientation-horizontal,glyph-orientation-vertical,image-rendering,kerning,letter-spacing,lighting-color,marker-end,marker-mid,marker-start,mask,opacity,overflow,pointer-events,shape-rendering,solid-color,solid-opacity,stop-color,stop-opacity,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,text-anchor,text-decoration,text-rendering,transform,unicode-bidi,vector-effect,visibility,word-spacing,writing-mode')