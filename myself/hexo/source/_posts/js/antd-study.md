---
title: antd学习
date: 2022-11-24 17:39:28
categories: 
          - [react,antd]
---
# button
```javascript
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str: any) {
  return typeof str === 'string';
}
```

### divider

```html
<div class="textColor">
    <h1></h1>
    <h2></h2>
    <h3></h3>
</div>
```
```css
/* :where
:is */
div:is(.textColor) :is(h1,h4) {
    color: red;
}
```
