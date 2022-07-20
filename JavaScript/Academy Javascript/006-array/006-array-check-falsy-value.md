```js
const clean = dirty.filter(Boolean);
const clean = [0, false, true, undefined, null, '', 12, 15].filter(Boolean);
// [true, 12, 15]
```