import PeekIterator from "./PeekIterator";
import VNode from "./VNode";
import { output } from "./utils";

enum State_Status {
  TEXT,
  NODE,
  ATTR,
}

export function compile(template) {
  const it = new PeekIterator(template)
  let root: VNode = new VNode()
  let parent: VNode = root
  let current: VNode

  let status: State_Status = State_Status.TEXT // 初始状态
  let str = ''
  let ch

  // parent 节点修改
  // 1. <h1 /> 不修改，因为没有子节点，所以parent不会改变
  // 2. </div> parent 需要设置为当前parent的parent
  // 3. <div> parent 等于current

  while (it.hasNext()) {
    // 每次吃掉一个字符
    ch = it.next()
    
    if (status === State_Status.TEXT) {
      if (ch === '<') {
        // 进入标签
        parent.addChild(str)
        str = ''
        status = State_Status.NODE
      } else {
        str += ch
      }
    } else if (status === State_Status.NODE) {
      if (ch === '/') {
        // </
        while (it.next() !== '>') {}
        if (str) {
          // <br /> 自闭合 因为没有子节点，所以parent不会改变
          current = new VNode(str, null, parent)
          str = ''
        } else {
          // </div>  parent 需要设置为当前parent的parent
          parent = parent.parent
        }
        status = State_Status.TEXT
      } else if (ch === '>') {
        current = new VNode(str, null, parent)
        str = ''
        parent = current
        status = State_Status.TEXT
      } else if (ch === ' ') {
        current = new VNode(str, null, parent)
        str = ''
        status = State_Status.ATTR
      } else {
        str += ch
      }

    } else if (status === State_Status.ATTR) {
      if (ch === '/') {
        // </
        const lookahead = it.peek()
        if (lookahead === '>') {
          while (it.next() !== '>') {} // <br />
          current.setProps(str)
          str = ''
          status = State_Status.TEXT
        } else {
          str += ch
        }
      } else if (ch === '>') {
        current.setProps(str)
        str = ''
        parent = current
        status = State_Status.TEXT
      } else {
        str += ch
      }
    } 
  }
  
  return output(root)
}

