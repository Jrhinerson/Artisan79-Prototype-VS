import { useEffect, useState } from "react";
import { Product } from "./products";


function App() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('http://localhost:5160/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    function addProducts() {
        setProducts(prevState => [...prevState,
            {
                id: prevState.length + 101,
                name: 'product' + (prevState.length + 1),
                price: (prevState.length * 100 + 100),
                brand: 'some brand',
                description: 'some description',
                pictureUrl: 'httop://picsum.photos/200'
            }])
    }

    return (
      <div>
          <h1>Lodan </h1>
          <ul>
              {products.map((product) =>
                  <li key={product.id}>{product.name} - {product.price}</li>
              )}
           </ul>

            <button onClick={addProducts}>Add Product</button>
    </div>
  );
}

export default App;
