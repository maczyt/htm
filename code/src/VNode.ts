import { setProps, trim } from "./utils"

export default class VNode {
  type: string
  props: object
  children: Array<VNode>
  parent: VNode
  constructor(type = null, props = null, parent = null) {
    this.type = type
    this.props = props
    this.children = []
    this.addParent(parent)
  }
  setType(type: string) {
    this.type = type
  }
  setProps(props: string) {
    this.props = setProps(props)
  }
  addParent(parent: VNode) {
    this.parent = parent
    if (parent) {
      parent.addChild(this)
    }
  }
  addChild(child: any) {
    if (typeof child === 'string') {
      child = trim(child)
      if (child) this.children.push(child)
      return
    }
    this.children.push(child)
  }
}