const Trim_Reg = /^[\s\r\n]*|[\s\r\n]*$/g

export const trim = (str: string) => {
  return str.replace(Trim_Reg, '')
}

export const setProps = (props: string) => {
  return trim(props).split(' ').filter(Boolean).reduce((obj, item) => {
    let [key, value = true] = item.split('=')
    if (typeof value === 'string') {
      value = value.replace(/^['"]|['"]$/g, '')
    }
    obj[key] = value
    return obj
  }, Object.create(null))
}

export const output = (node) => {
  const ret = node.children
    .filter(child => typeof child === 'object')
    .map(item => removeParent(item))
  if (ret.length === 1) return ret[0]
  return ret
}

function removeParent(node) {
  if (typeof node !== 'object') return node
  delete node.parent
  if (Array.isArray(node.children)) {
    for (let child of node.children) {
      removeParent(child)
    }
  }
  return node
}