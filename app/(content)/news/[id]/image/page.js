import { DUMMY_NEWS } from "@/dummy-news"
import Image from "next/image"
import { notFound } from "next/navigation"

export default function ImagePage (props) {
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === props.params.id )

    if (!newsItem) {
        notFound()
    }

    return (
        <div className='fullscreen-image' >
            <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    )
}
