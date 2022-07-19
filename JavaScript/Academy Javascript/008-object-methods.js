// FIXME  [object methods favorities]
// higher

Object.assign();
// NOTE  assign()
// 1. → [obj1, obj2] gộp 2 mảng lại với nhau
const newObjAssign = Object.assign(obj1, obj2);
// 2. → spread syntax cũng là một shadow-cloning
// const newObjAssign1 = {…obj1, …obj2}
// 3. → Clone an object to a new object → tạo ra một object mới = copy các phần tử của obj
const newObjAssign2 = Object.assign({}, obj1);
// 4. merge duplicate properties with Object.assign() → gộp obj2 → obj → giữ nguyên phần tử của obj1 nếu trùng với key phần tử của obj2
// 5. Merge multiple sources >
let a = Object.assign({ foo: 0 }, { bar: 1 }, { baz: 2 });
// 6. Merge and overwrite equal keys >
let b = Object.assign({ foo: 0 }, { foo: 1 }, { foo: 2 });
// → output: foo: 2
Object.create();
Object.entries();
// Object.entries(); → tạo ra các nested array là key và và value của object
Object.freeze();
Object.isFrozen();
Object.keys();
// → tạo ra một array với các phần tử là key của object
Object.values();
// → tạo ra một array với các phần tử là value của object
Object.seal();

// ANCHOR high
// ANCHOR medium

// ANCHOR low
// ANCHOR lower
Object.seal();

Deprecated;
Object.prototype.defineGetter();

// Deprecated
Object.prototype.defineSetter();

// Deprecated
Object.prototype.lookupGetter();

// Deprecated
Object.prototype.lookupSetter();

Object.defineProperties();

Object.defineProperty();

Object.fromEntries();

Object.getOwnPropertyDescriptor();

Object.getOwnPropertyDescriptors();

Object.getOwnPropertyNames();

Object.getOwnPropertySymbols();

Object.getPrototypeOf();

// Experimental
Object.hasOwn();

Object.prototype.hasOwnProperty();

Object.is();

Object.isExtensible();

Object.prototype.isPrototypeOf();

Object.isSealed();

Object.preventExtensions();

Object.prototype.propertyIsEnumerable();

Object.setPrototypeOf();

Object.prototype.toLocaleString();

// Non-Standard
Object.prototype.toSource();
// Deprecated
Object.prototype.toString();

Object.prototype.valueOf();
