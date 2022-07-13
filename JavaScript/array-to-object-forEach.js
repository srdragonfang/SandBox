const arrToObj = arr => {
    const obj = {};
    arr.forEach(item => obj[item[0]] = item[1]);
    return obj;
}