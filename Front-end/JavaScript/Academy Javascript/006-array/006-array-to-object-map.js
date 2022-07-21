function arrayToObject(arr) {
	const obj = {}
	arr.map(item => {
  	obj[item[0]] = item[1]
  })
  return obj
}