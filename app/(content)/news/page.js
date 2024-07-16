'use client'
import Link from "next/link"

import { DUMMY_NEWS } from "@/dummy-news"
import NewsList from "../../components/news-list"
import NewsListCopy from '../../components/news-list copy'
import { useEffect, useState } from "react"

export default function NewsPage () {

    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [news, setNews] =useState();

    useEffect(()=> {

        async function fetchNews() {
            setIsLoading(true);
            // Fecthing Breaking News from API
            const response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_485434917ca164f6d32ccf0296dfe6792ed5c&q=pegasus&language=en');

            if(!response.ok){
               setError(`Failed to fecth news. Error - ${response.status}:  ${response.statusText}`);
               console.log(response)
               setIsLoading(false);
            }

            
            const news = await response.json()
            setIsLoading(false)
            setNews(news.results)

        }

        fetchNews()

    },[])
 
    if (isloading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    let newsContent;

    if (news) {
        newsContent = <NewsListCopy news={news}/>
        console.log(news[0].image_url)
    }

    return (
        <>
            <h1>Hello This is the News Page</h1>

            {newsContent}

            <NewsList news={DUMMY_NEWS} />

            {/* <NewsListCopy news={news}/> */}

        </>
    )
}