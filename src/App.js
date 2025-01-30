import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Props from './Props';
import Counter from './Counter';
import Array from './array';



function App() {
  const [products, setProducts] = useState([])


  const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.data);
    console.log(response.data)
  };
  const userdetal = {
    name: "Payal",
    age: 20,
  };
  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className="App">

      <div>
        {/* <Props  name="arpana" age="30"  /> */}
        <Props {...userdetal}  />
        {/* add counter */}
       <Counter />
      
      <Array />
        {/* {products.map((product, index) => (
          <div key={index}>
            <h5>{product.title}</h5> 
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default App;