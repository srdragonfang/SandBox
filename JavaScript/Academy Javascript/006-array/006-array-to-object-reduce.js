// method #1
function arrToObj(arr) {
    const obj = arr.reduce((acc, cur) => {
        acc[cur[0]] = cur[1]
        return acc
    }, {})

    return obj
 }
 
 // method #2
 function arrToObj(arr) {
   return arr.reduce((total, [key, value]) => {
      return {...total, [key]: value}
   }, {})
}

// method #3
function arrayToObject(arr) {
   if (!Array.isArray(arr) || !arr.length) return undefined;

   return Array.from(arr).reduce(
      (acc, [key, value]) => ({
         ...acc,
         [key]: value,
      }),
      {}
   );
}

// method #4
function arroObj(arr) {
 return   arr.reduce((a,b)=>({
        ...a,
        [b]:b
    }),{})
}
const arr = ['aaa','fff','ccc']
console.log(arroObj(arr))

