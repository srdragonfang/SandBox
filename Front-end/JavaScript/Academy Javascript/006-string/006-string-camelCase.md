```js
const fromCamelCase = (str, separator = '\_') =>str.replace(/(\[a-z\\d\])(\[A-Z\])/g, '$1' + separator + '$2').replace(/(\[A-Z\]+)(\[A-Z\]\[a-z\\d\]+)/g, '$1' + separator + '$2').toLowerCase();

console.log(fromCamelCase('blogJavascriptAnonystick', ' ')); // 'blog javascript anonysticke'
console.log(fromCamelCase('blogJavascriptAnonystick', '-')); // 'blog-javascript-anonystick'
console.log(fromCamelCase('blogJavascriptAnonystick', '\_')); // 'blog\_javascript\_anonystick'

```