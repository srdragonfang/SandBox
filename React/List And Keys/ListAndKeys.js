import React, {useState} from 'react'
const data = [1,2,3,4,5].map(n => {
    return {
        value: n,
        id: `id${n}`
    };
});
const ListKey = () => {
   const [numbers, setNumbers] = useState(data) ;
  function renderItem (n, index) {
    return (
    <h1 key={index} onClick={() => deleteItem(n.id)}>{n.value}</h1>
  );
};
function deleteItem (id) {
    const filtered = numbers.filter(n => n.id !== id);
    setNumbers(filtered);
}
return (
    <div className='Sokun'>
    {numbers.map(renderItem)}
    </div>
);
}
export default ListKey