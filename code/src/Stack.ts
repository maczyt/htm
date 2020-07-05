class Stack<T = string> {
  private stack: Array<T>
  constructor() {
    this.stack = []
  }

  /**
   * 入栈
   * @param e 
   */
  push(e: T) {
    this.stack.push(e)
  }

  /**
   * 出栈
   */
  pop(): T {
    return this.stack.pop()
  }

  /**
   * 获取栈是否为空
   */
  isEmpty(): boolean {
    return this.getSize() === 0
  }

  /**
   * 获取栈的大小
   */
  getSize(): number {
    return this.stack.length
  }

  /**
   * 获取栈顶元素
   */
  get head() {
    return this.stack[this.getSize() - 1]
  }
}

export default Stack