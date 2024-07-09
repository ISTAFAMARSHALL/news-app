import { DUMMY_NEWS } from "@/dummy-news"
import { notFound } from "next/navigation"
import Image from "next/image"

export default function InterceptedImagePage (props) {
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === props.params.id )

    if (!newsItem) {
        notFound()
    }

    return (
        <>
            <div className='modal-backdrop'>
                    <dailog className='modal'>
                        <div className='fullscreen-image' >
                            
                            <Image 
                                src={`/images/news/${newsItem.image}`} 
                                alt={newsItem.title} 
                                width='735'
                                height='900'
                            />

                        </div>
                    </dailog>
            </div>
        </>
    )
}