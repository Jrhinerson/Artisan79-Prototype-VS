import { Key } from "react"
import ProductCard from "./ProductCard"
import Product from "../interfaces/Product"

async function GetProducts() {
    const res = await fetch('http://localhost:5200/api/Products')
    return res.json()
}

export default async function ProductList() {
    const products = await GetProducts()
    
    return (
        <>
            <h1>Store</h1>
            <ul>
                {products.map((Product: Product) => (
                    <ProductCard key={Product.id} id={Product.id} name={Product.name} price={Product.price} description={Product.description} pictureUrl={Product.pictureUrl} type={Product.type} brand={Product.brand} quantityInStock={Product.quantityInStock} />
                ))}
            </ul>
        </>
    )
}