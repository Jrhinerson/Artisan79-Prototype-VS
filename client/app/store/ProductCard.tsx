import Image from 'next/image'
import Product from '../interfaces/Product'


export default function ProductCard(props: Product) {
    return(
        <>
            <Image src={props.pictureUrl} width={250} height={250} alt={props.name}></Image>
        </>
    )
}