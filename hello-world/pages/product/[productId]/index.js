import {useRouter} from 'next/router'

function productDetails(){
    const router = useRouter();
    const productId = router.query.productId;
    return(
        <>
           <h1>Details of Prduct {productId}</h1>
        </>
    )
}
export default productDetails