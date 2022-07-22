const numbers = [10, 20, 30];

// const value = 0;
// for (let i = 0; i < numbers.length; i++) {
//     value += numbers[i];
// }

const total = numbers.reduce((acc, item) => acc + item)