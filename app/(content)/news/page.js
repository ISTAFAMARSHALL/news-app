import { DUMMY_NEWS } from "@/dummy-news"
import NewsList from "@/app/components/news-list";

export default function NewsPage () {

    let newsContent;
    

    if (DUMMY_NEWS) {

        newsContent = <NewsList news={DUMMY_NEWS} />

    }

    return (
        <>
            <h1>Hello This is the News Page</h1>

            {newsContent}

            {/* <NewsList news={DUMMY_NEWS} /> */}

            {/* <NewsListCopy news={DUMMY_NEWS}/> */}

        </>
    )
}