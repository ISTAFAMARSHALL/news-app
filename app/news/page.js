import Link from "next/link"

export default function NewsPage () {
    return (
        <>
            <h1>Hello This is the News Page</h1>

            <ul className='news-list'>

                <li>

                    <Link href={'/news/1'}>First Link</Link>

                </li>

                <li>

                    <Link href={'/news/2'}>Second Link</Link>

                </li>

                <li>

                    <Link href={'/news/3'}>Third Link</Link>

                </li>

            </ul>

        </>
    )
}