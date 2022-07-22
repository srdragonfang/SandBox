data type
    undefined = khong duoc dinh nghia
    number
        number methods
            Math
                .PI
                .max
                .min
                .random
                .floor = lam tron duoi
                .sqrt
            date
    NaN = not a number = 
        isNaN()
        Number.isNaN()
    
    boonlean
        true
        false
        truesy vs falsy
    
    null
        typeof null = object
        how to check null?
    symbol

    string
        noi chuoi = toString();
        cat chuoi = 
        viet hoa = toUpperCase();
        viet hoa chu cai dau = toUpperCase(0) + strg.splice(1) // splice right?;
        convert:
            to number:
            to boolean:
            to NaN:
            to undefined:
            to array:
            to object:    

DOM = Document object model
    dom mouse
    dom event
    dom element
    dom selector

function = learn again
    main:
        declare function
            can be hoisting
```js
    function declareFunc () {}
```
        expression function
            can NOT be hoisting
```js
    const expressionFunc = function () {}
```
```js
    getItem: function () {
        
    }
```
    plus:
        arrow function

        anomyous function

array




object
    copy object:
        shallow copy:
            1. Object.assign()
```js
    const obj3 = Object.assign({}, obj)
```
            2. spread operator
```js
    const obj2 = [...obj]
    console.log(obj2)
```
        deep coping
            3. JSON.stringify
```js
    const obj3 = JSON.stringify(obj)
```

        ? what is different between shallow copy and deep copying
        the diffirent is the new object can change value or not if the old object was change.

    object methods:
        1 .map()
        2 .forEach()
        3 .reduce()
        4 .some()
        5 .find()
        6 .indexOf()
        7 .lastIndexOf()
        8 .flat()
        9 .fill()
        10 .filter()

    ? how to flat object
    > hmm, now i dont know.

    ES6+
        arrow function
        `` quotation literial
        spread operator