const similarity = (arr, values) => arr.filter(v => values.includes(v));
similarity(\[1, 2, 3\], \[1, 2, 4\]); // \[1,2\]