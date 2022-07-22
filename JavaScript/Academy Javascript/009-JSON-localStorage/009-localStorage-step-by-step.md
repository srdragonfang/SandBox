input
```js
function createItem(itemInput) {
    console.log("say", itemInput)
}
```
#1 set data to localStorage

```js
setProjectData(valueToSet);
function setProjectData(valueToSet) {
	localStorage.setItem('name-of-project', valueToSet);
}
```

#2 get data from localStorage

```js
function getDataFromLocalStorage() {
	const dataLocalStorages = JSON.parse(
		localStorage.getItem('name-of-project')
	);
	// #3 check the state data of localStorage
	return dataLocalStorages === null ? [] : dataLocalStorages;
}
```
#4 update data from localStorage
```js 
function populateUI() {
    // gán dữ liệu lấy từ localStorage cho data
    const data = getDataFromLocalStorage()
    // 
    data.forEach((item, index) => {
        createItem(item)
    })
}
```
#5 remove item from data of localStorage
1. cần phải có index hoặc value (idx, vlx)
2. chuyển dữ liệu từ JSON string -> object
3. Object.filter()
4. if (idx !== id) {
    return id
}
> input: item.idRemove
```js
function removeItemFromLocalStorage(idRemove) {
    let dataRoot = getDataFromLocalStorage();
    dataRoot.filter(function(item) {
        return item.id !== idRemove
        // lay ca item co id không phải là idRemove
    })

    // update new data to localStorage
    setProjectData(dataRoot)
}
```

#6 edit item from data of localStorage
