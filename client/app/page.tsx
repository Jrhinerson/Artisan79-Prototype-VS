'use client'

import { useEffect, useState } from "react"


export default function Home() {
  const [products, setProducts] = useState([
    {name: 'product1', price: 100.00},
    {name: 'product2', price: 200.00},
  ]);

  useEffect(() => {
    fetch('http://localhost:5160/api/Products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts(prevState => [...prevState, {name: 'product' + (prevState.length + 1), price: (prevState.length * 100 + 100)}])
  }
  
  return (
    <>
      <h1>Artisan79</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
        <button onClick={addProduct}>Add Product</button>
      </ul>
    </>
  )
}
