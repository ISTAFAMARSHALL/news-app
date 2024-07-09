import NewsList from "@/app/components/news-list";
import { getLatestNews } from "@/app/lib/new"

export default function LatestNewsPage () {

    const lastestNews = getLatestNews();

    return (
        <>
            <h1>Latest News</h1>
            
            <NewsList news={lastestNews} />
        </>
    )
}