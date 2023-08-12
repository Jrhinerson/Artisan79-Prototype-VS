import { Key } from "react"
import ProductCard from "./ProductCard"

async function GetProducts() {
    const res = await fetch('http://localhost:5160/api/Products')
    return res.json()
}

export default async function ProductList() {
    const products = await GetProducts()
    
    return (
        <>
            <h1>Store</h1>
            <ul>
                {products.map((Product) => (
                    <ProductCard key={Product.id} name={Product.name} price={Product.price} description={Product.description} />
                ))}
            </ul>
        </>
    )
}