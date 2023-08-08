import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

interface Props {
    products: Product[];
    addProducts: () => void;
}

export default function Catalog({products, addProducts}: Props) {
    return (
        <>
            <h1>Catalog</h1>
            <ProductList products={products} />

            <Button variant='contained' onClick={addProducts}>Add Product</Button>
        </>
    )
}