import React from 'react'


let arraylist = [1,2,3,4,5]
console.log(arraylist)

//slice - Extracts elements from index 1 to 3 (4 is excluded)
const addSlice = arraylist.slice(1,3)
console.log('slice',addSlice)

//splice remove - // Removes 3 elements starting from index 1
const addSplice = arraylist.splice(1,2)
console.log('splice',addSplice)
//splice with add  - // Inserts 3 and 4 at index 2 without removing anything
const addSpliceadd = arraylist.splice(2,0 ,3,4)
console.log('splice with add',arraylist)



const Array = () => {
  return (
    <div>array</div>
  )
}

export default Array