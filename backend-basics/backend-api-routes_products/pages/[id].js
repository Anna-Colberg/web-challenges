import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";


export default function Product() {
    const router = useRouter();
    const { id } = router.query;

    const { data: products, isLoading } = useSWR(`/api/products/${id}`, (url) => 
    fetch(url).then((response) => response.json())
); 

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (!products) {
        return;
    }


    return (
        <>
        <h1>{products.name}</h1>
        <Link href="/">Back</Link></>
    )
} 