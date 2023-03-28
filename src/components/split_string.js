const {exec} = require('child_process')
const split_string = (str) => {
    const list = str.split('|')

    let content = ''

    list.forEach(item => {
        item = item.trim()
        content += `'${item}',`
    })

    exec('pbcopy').stdin.end(content)

    console.info(`[${content}]`)
}

split_string('nonzero|evenodd|inherit')

// 获取属性的值列表

{
    const arr = Array.from(document.querySelectorAll('dt'))

    arr.forEach(dom => {
        const id = dom.id

        if (id !== '') {
            console.info(`===== ${id} ====`)
            const next = dom.nextElementSibling
            const em = next.querySelector('em')
            let code = em.nextElementSibling
            let tagName = code.tagName
            let tmp = ''

            while (tagName.toLowerCase() !== 'em') {
                tmp += `'${code.innerText}', `
                code = code.nextElementSibling
                if (!code) {
                    break
                }
                tagName = code.tagName
            }

            console.info(tmp)
        }
    })
}