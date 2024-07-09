import { DUMMY_NEWS } from "@/dummy-news"

export default function NewsDetailsPage (props) {

    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === props.params.id )

    return (
        <article>

            <header>

                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                
                <h1>{newsItem.title}</h1>

                <time dateTime={newsItem.date} >{newsItem.date}</time>
            
            </header>

            <p>{newsItem.content}</p>

        </article>
    )
}