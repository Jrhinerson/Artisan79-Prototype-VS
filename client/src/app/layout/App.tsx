import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";



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
      <>
           <Typography variant='h1'>Lodan</Typography>
            <Catalog products={products} addProducts={addProducts} />
    </>
  );
}

export default App;