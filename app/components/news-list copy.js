import Image from "next/image"
import Link from "next/link"

export default function NewsList (props) {

    return (
        <ul className='news-list'>

                {props.news.map((newsItem) => {
                    return (
                        <li key={newsItem.article_id} >
                            <Link 
                            href={`/news/${newsItem.article_id}`}
                            >
                                <Image 
                                    width='480'
                                    height='720'

                                    src={ !newsItem.image_url ? "" : newsItem.image_url } 
                                    alt={newsItem.title} 
                                />
                            </Link>
                            <p style={{marginTop: '1px'}}>{newsItem.title}</p>
                        </li>
                    )
                })}

        </ul>
    )
}
