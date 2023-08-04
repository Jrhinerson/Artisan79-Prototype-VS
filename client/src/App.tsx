import { useEffect, useState } from "react";


function App() {
    const [products, setProducts] = useState([
        { name: 'product1', price: 100 },
        { name: 'product2', price: 200 },
    ]);
    useEffect(() => {
        fetch('http://localhost:5160/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    function addProducts() {
        setProducts(prevState => [...prevState, {name: 'product' + (prevState.length  + 1), price: (prevState.length * 100 + 100)}])
    }

    return (
      <div>
          <h1>Lodan </h1>
          <ul>
              {products.map((item, index) =>
                  <li key={index}>{item.name} - {item.price}</li>
              )}
           </ul>

            <button onClick={addProducts}>Add Product</button>
    </div>
  );
}

export default App;
