import NewsList from "@/app/components/news-list";
import { getNewsForYear } from "@/app/lib/new";

export default function FilterNewsPage (props) {
    const newsYear = props.params.year
    const news = getNewsForYear(newsYear);
    return <NewsList news={news} />
}