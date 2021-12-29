import {useRouter} from 'next/router'

function reviewIdDetails(){
    const router = useRouter();
    const {productId, reviewId} = router.query
    return(
        <>
        <h1>Review of product {productId} is {reviewId}</h1>
        </>
    )

}
export default reviewIdDetails