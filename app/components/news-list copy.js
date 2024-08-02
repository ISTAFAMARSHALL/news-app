import Image from "next/image"
import Link from "next/link"

export default function NewsList (props) {

    return (
        <ul className='news-list'>

                {props.news.map((newsItem) => {
                    return (
                        <div key={newsItem.uri} >
                        <li >
                            <Link 
                            href={`/news/${newsItem.uri}`}
                            >
                                <Image 
                                    width='480'
                                    height='720'

                                    src={ !newsItem.image ? "" : newsItem.image } 
                                    alt={newsItem.title} 
                                    priority
                                />
                            </Link>
                            <p style={{marginTop: '1px'}}>{newsItem.title}</p>
                        </li>
                        </div>
                    )
                })}

        </ul>
    )
}
