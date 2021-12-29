import Link from 'next/link'
function blog(){
    return (
    <div>
    <h2>Blog Page</h2>
    <Link href='blog/first'><a>goto first Page</a></Link>
    </div>
    )
}
export default blog