import Link from "next/link"

import { DUMMY_NEWS } from "@/dummy-news"

export default function NewsPage () {
    return (
        <>
            <h1>Hello This is the News Page</h1>

            <ul className='news-list'>

                {DUMMY_NEWS.map((newsItem) => {
                    return (
                        <li key={newsItem.id} >
                            <Link href={`/news/${newsItem.id}`}>
                                <img 
                                    src={`/images/news/${newsItem.image}`} 
                                    alt={newsItem.title} 
                                />
                            </Link>
                            <span>{newsItem.title}</span>
                        </li>
                    )
                })}

            </ul>

        </>
    )
}