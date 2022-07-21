function Reverse(arr = []) {
    return arr.reduceRight((arrReverse, item) => (arr.push(v), t), []);
}
Reverse([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]