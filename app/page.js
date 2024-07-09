import Link from "next/link"

export default function HomePage () {
  return (
    <div id='home'>

      <h1>News App Home Page</h1>

      <ul>

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

    </div>

  )
}
