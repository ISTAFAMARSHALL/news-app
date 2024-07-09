import Link from "next/link"

import { DUMMY_NEWS } from "@/dummy-news"
import NewsList from "../../components/news-list"

export default function NewsPage () {
    return (
        <>
            <h1>Hello This is the News Page</h1>

            <NewsList news={DUMMY_NEWS} />

        </>
    )
}