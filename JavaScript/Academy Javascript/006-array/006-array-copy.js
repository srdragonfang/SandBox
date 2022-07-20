const arr = ["a", "p", "p", "l", "e"]
const str = [...arr]
console.log(str)

// Copy mảng, check duplicate
const deDupe = (myArray) => [... new Set(myArray)];
deDupe([1, 1, 2, 1, 3, 3, 4])
// [1, 2, 3, 4]