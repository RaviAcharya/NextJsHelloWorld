import Link from "next/link"

function first(){
    return( 
    <>
    <h2>First blog page</h2>
    <Link href='/blog/second'><a>goto second page</a></Link>
    </>
    )

}
export default first