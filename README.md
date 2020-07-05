# JSX 编译到虚拟DOM

> React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。

## 目的

熟系转换 `JSX` 字符串到虚拟DOM的底层实现



## 步骤

1. 定义有限状态机

   不断生成不同的 `Token`

2. JS字符流处理器 `PeekIterator`

   能对字符实现流的控制



## Token

*出于简单理解，咱们就以标准HTML来例*

```typescript
// Token 类型
enum TokenType {
  NODE,
  ATTR,
  TEXT,
}
```



### 状态机

![JSX](/Users/maczyt/Documents/文档/知识点/JSX编译/JSX.jpg)

## Example



### In

``` js

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
```

### Out

``` json
{
  "type": "div",
  "props": {
    "class": "container"
  },
  "children": [
    {
      "type": "br",
      "props": null,
      "children": []
    },
    {
      "type": "br",
      "props": {},
      "children": []
    },
    {
      "type": "h1",
      "props": null,
      "children": [
        "Hello World"
      ]
    },
    {
      "type": "div",
      "props": {
        "id": "{xxx}"
      },
      "children": [
        {
          "type": "p",
          "props": null,
          "children": [
            "ok"
          ]
        }
      ]
    }
  ]
}
```



