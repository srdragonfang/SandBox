Nếu bạn nào làm backend thì việc format console.log() thì sử dụng format này là quá hiệu quả.

```js
const formatted = JSON.stringify(myObj, null, 4);
const formatted = JSON.stringify({name: 'Anonystick', age: 18, address: 'sz'}, null, 4);
{
    "name": "Anonystick",
    "age": 18,
    "address": "sz"
}
```