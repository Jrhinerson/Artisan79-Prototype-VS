import { Product } from "../../app/models/product";

interface Props {
    products: Product[];
    addProducts: () => void;
}

export default function Catalog({products, addProducts}: Props) {
    return (
        <>
            <h1>Catalog</h1>
            <ul>
              {products.map((product) =>
                  <li key={product.id}>{product.name} - {product.price}</li>
              )}
            </ul>

            <button onClick={addProducts}>Add Product</button>
        </>
    )
}