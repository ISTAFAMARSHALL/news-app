import { DUMMY_NEWS } from "@/dummy-news"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function NewsDetailsPage (props) {

    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === props.params.id )

    if (!newsItem) {
        notFound()
    }

    return (
        <article>

            <header>

                <Link href={`/news/${newsItem.id}/image`} >
                    <Image 
                        height='450'
                        width='450'
                        src={`/images/news/${newsItem.image}`} 
                        alt={newsItem.title} 
                        />
                </Link>

                <h1>{newsItem.title}</h1>

                <time dateTime={newsItem.date} >{newsItem.date}</time>
            
            </header>

            <p>{newsItem.content}</p>

        </article>
    )
}
