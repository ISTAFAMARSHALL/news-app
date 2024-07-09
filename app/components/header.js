import Link from 'next/link'

export default function Header () {
    return (
        <h1>
            <Link href=".." style={{marginRight: '50px'}} >home</Link>
            <Link href="/news" >News</Link>
        </h1>
    )
}
