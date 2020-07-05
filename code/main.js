import { compile } from './src'

const template = `
  <div class='container'>
    <br/>
    <br />
    <h1>Hello World</h1>
    <div id={xxx}>
      <p>ok</p>
    </div>
  </div>
`
console.log(JSON.stringify(compile(template), null, 2))