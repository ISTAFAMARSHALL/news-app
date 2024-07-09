import Link from "next/link"

export default function (props) {
    return (
        <ul className='news-list'>

                {props.news.map((newsItem) => {
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
    )
}
