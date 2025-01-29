import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.data);
    console.log(response.data)
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <div>
        {products.map((product, index) => (
          <div key={index}>
            <h5>{product.title}</h5> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;