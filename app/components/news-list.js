import Image from "next/image"
import Link from "next/link"

export default function (props) {
    return (
        <ul className='news-list'>

                {props.news.map((newsItem) => {
                    return (
                        <li key={newsItem.id} >
                            <Link href={`/news/${newsItem.id}`}>
                                <Image 
                                    src={`/images/news/${newsItem.image}`} 
                                    alt={newsItem.title} 
                                />
                            </Link>
                            <p>{newsItem.title}</p>
                        </li>
                    )
                })}

        </ul>
    )
}
