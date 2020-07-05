class Queue<T = string> {
  private queue: Array<T>
  constructor() {
    this.queue = []
  }

  /**
   * 屁股出队
   */
  pop(): T {
    return this.queue.pop()
  }

  /**
   * 入队
   * @param e 
   */
  enqueue(e: T) {
    this.queue.push(e)
  }

  /**
   * 出队
   */
  dequeue(): T {
    return this.queue.shift()
  }

  isEmpty(): boolean {
    return this.getSize() === 0
  }

  getSize(): number {
    return this.queue.length
  }
}

export default Queue
