import './SearchResultStyles.css'
import { results } from "../../mock-book-data"

export default function SearchResult() {
    return (
        <div className="search-result__container">
            <div className="search-result__title">{results[0].title}</div>
            <div className="search-result__connective"> by </div>
            <div className="search-result__author">{results[0].author}</div>
        </div>
    )
}
