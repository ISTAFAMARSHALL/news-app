import Image from "next/image"
import Link from "next/link"

export default function NewsList (props) {

    let content;

    if (props.news) {
        content = props.news.map((newsItem) => {
            return (
                <li key={newsItem.id} >
                    <Link href={`/news/${newsItem.id}`}>
                        <Image 
                            width='480'
                            height='720'
    
                            src={`/images/news/${newsItem.image}`} 
                            alt={newsItem.title} 
                            priority
                        />
                    </Link>
                    <p style={{marginTop: '1px'}}>{newsItem.title}</p>
                </li>
            )
        })
    }

    return (
        <ul className='news-list'>

            {content}

        </ul>
    )
}
