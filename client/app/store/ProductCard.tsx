import Image from 'next/image'

interface props {
    id: number;
    name: string; 
    description: string;
    price: number;
    pictureUrl: string;
    type: string;
    brand: string;
    quantityInStock: number;
}

export default function ProductCard(props: props) {
    return(
        <>
        <div>{props.id}</div>
        <div>{props.name}</div>
        <div>{props.description}</div>
        <div>{props.price}</div>
        <div>{props.pictureUrl}</div>
        <div>{props.type}</div>
        <div>{props.brand}</div>
        <div>{props.quantityInStock}</div></>
    )
}