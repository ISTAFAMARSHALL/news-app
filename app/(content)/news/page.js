'use client'
import Link from "next/link"

import { DUMMY_NEWS } from "@/dummy-news"
import NewsList from "../../components/news-list"
import { useEffect, useState } from "react"

export default function NewsPage () {

    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [news, setNews] =useState();

    useEffect(()=> {

        async function fetchNews() {
            setIsLoading(true);
            const response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_485434917ca164f6d32ccf0296dfe6792ed5c&q=pegasus&language=en');

            if(!response.ok){
               setError('failed to fecth news.');
               setIsLoading(false);
            }

            
            const news = await response.json()
            setIsLoading(false)
            setNews(news.results)

        }

        fetchNews()

    },[])

    console.log(news)
 
    // if (isloading) {
    //     return <p>Loading...</p>
    // }

    // if (error) {
    //     return <p>{error}</p>
    // }

    // let newsContent;

    // if (news) {
    //     newsContent = <NewsList news={DUMMY_NEWS} />
    // }

    return (
        <>
            <h1>Hello This is the News Page</h1>

            {/* {newsContent} */}

            <NewsList news={DUMMY_NEWS} />

        </>
    )
}