'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar ({href , children}) {

    const path = usePathname();

    return (
        <nav>
            <ul>
                <li>
                    <Link 
                        href={href}
                        className={path.startsWith(href) ? 'active' : undefined} 
                    >
                        {children}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}