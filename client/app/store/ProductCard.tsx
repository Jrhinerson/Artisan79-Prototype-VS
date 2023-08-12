import Image from 'next/image'
import Product from '../interfaces/Product'

export default function ProductCard(props: Product) {
    return(
        <>
            <div>{props.id}</div>
            <div>{props.name}</div>
            <div>{props.description}</div>
            <div>{props.price}</div>
            <div>{props.pictureUrl}</div>
            <div>{props.type}</div>
            <div>{props.brand}</div>
            <div>{props.quantityInStock}</div>
        </>
    )
}