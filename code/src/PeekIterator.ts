import Stack from './Stack'
import Queue from './Queue'

class PeekIterator {
  private iterator: Generator<string>
  private recordQueue: Queue
  private cacheStack: Stack
  constructor(str: string) {
    this.iterator = arrayToGenerator([...str])
    this.recordQueue = new Queue()
    this.cacheStack = new Stack()
  }

  peek() {
    if (!this.cacheStack.isEmpty()) {
      return this.cacheStack.head
    }
    const e = this.next()
    if (e) {
      this.pullLast()
    }
    return e
  }

  next() {
    let e: string = null
    if (!this.cacheStack.isEmpty()) {
      e = this.cacheStack.pop()
    } else {
      const next = this.iterator.next()
      e = next.value
    }

    // while (this.recordQueue.getSize() >= 5) {
    //   this.recordQueue.dequeue()
    // }
    if (e) {
      this.recordQueue.enqueue(e)
    }
    return e
  }

  hasNext(): boolean {
    const e = this.peek()
    return !!e
  }

  pullLast() {
    if (this.recordQueue.isEmpty()) return
    this.cacheStack.push(this.recordQueue.pop())
  }
}

export default PeekIterator

const arrayToGenerator = function *(arr: Array<string>): Generator<string> {
  for (let ch of arr) {
    yield ch
  }
}