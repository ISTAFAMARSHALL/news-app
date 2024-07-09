import Link from 'next/link'

export default function Header () {
    return (
        // <h1>
        <header id='main-header' >
            
            <div id='logo' >
                <Link href=".." 
                    // style={{marginRight: '50px'}} 
                >
                    Home
                </Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href="/news" >News</Link>
                    </li>

                    <li>
                        <Link href="/archive" >Archive</Link>
                    </li>

                </ul>
            </nav>
            
        </header>
        // </h1>
    )
}
