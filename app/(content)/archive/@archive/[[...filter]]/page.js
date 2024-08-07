import NewsList from "@/app/components/news-list";
import { getNewsForYear ,getAvailableNewsYears, getAvailableNewsMonths , getNewsForYearAndMonth} from "@/app/lib/new";
import Link from "next/link";
import { Suspense } from "react";

export default function FilterNewsPage (props) {
    const filter = props.params.filter;

    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]

    let news;
    // let newsContent;
    let links = getAvailableNewsYears();

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth)
        links = []
    }

    let newsContent = <p>No news found for selected period.</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    } 

    if (selectedYear && !getAvailableNewsYears().includes(+selectedYear)
        || selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)
    ) {
        throw new Error('Invalid Filter')
    }

    return (
        <>
            <Suspense fallback={<p>Loading News...</p>}>
                <header id='archive-header'>

                    <nav>
                        <ul>
                            {links.map((link) => {

                                const href = selectedYear
                                ? `/archive/${selectedYear}/${link}`
                                : `archive/${link}`;

                                return (
                                    <li key={link} >
                                        <Link href={href} >{link}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    {/* <NewsList news={news} /> */}
                
                </header>
            </Suspense>
            <Suspense fallback={<p>Loading News...</p>}>
                {newsContent}
            </Suspense>
        </>
    )
}