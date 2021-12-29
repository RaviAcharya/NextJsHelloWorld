import Link from "next/link"

function second(){
    return( 
        <>
    <h2>Second blog page</h2>
    <Link href='/blog'><a>goto blog</a></Link>
    </>
    )
}
export default second