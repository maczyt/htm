import { compile } from '../src/index'
import { expect } from 'chai';

describe('Test_Compiler', () => {
  it('template', () => {
    const template = `
      <div class='container'>
        Hello World
      </div>
    `
    const root = compile(template)
    expect(root.type).to.eq('div')
    expect(root.children).to.contains('Hello World')
  });
});