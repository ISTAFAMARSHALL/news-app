import { getAvailableNewsYears } from "@/app/lib/new"
import Link from "next/link";

export default function ArchivePage () {

    const links = getAvailableNewsYears();

    return (
        <header id='archive-header'>

            <nav>
                <ul>
                    {links.map((link) => {
                        return (
                            <li key={link} >
                                <Link href={`/archive/${link}`} >{link}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            
        </header>
    )
}