import Link from 'next/link'
import NavBar from './nav-bar';

export default function Header () {

    

    return (
        // <h1>
        <header id='main-header' >
            
            <div id='logo' >
                <Link href=".." 
                >
                    Home
                </Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <NavBar href={'/news'} >News</NavBar>
                    </li>
                    
                    <li>
                        <NavBar href={'/archive'} >Archives</NavBar>
                    </li>
                </ul>
            </nav>
            
        </header>
        // </h1>
    )
}
