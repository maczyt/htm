import PeekIterator from "../src/PeekIterator";
import { expect } from "chai";

const log = (data) => {
  console.log(JSON.stringify(data, null, 2))
}
describe('Test_PeekIterator', () => {
  it('next', () => {
    const iterator = new PeekIterator('12345')
    expect(iterator.peek()).to.eq('1')
    expect(iterator.peek()).to.eq('1')
    expect(iterator.peek()).to.eq('1')
    expect(iterator.next()).to.eq('1')
    expect(iterator.hasNext()).to.be.true
    expect(iterator.next()).to.eq('2')
    expect(iterator.next()).to.eq('3')
    expect(iterator.next()).to.eq('4')
    expect(iterator.next()).to.eq('5')
    expect(iterator.hasNext()).to.be.false
    expect(iterator.peek()).to.be.undefined
  });
});