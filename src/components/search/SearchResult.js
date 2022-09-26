import './SearchResultStyles.css'
import { results } from "../../mock-book-data"

export default function SearchResult(props) {
    const result = props.result;
    return (
        <div className="search-result__container">
            <div className="search-result__title">{result.title}</div>
            <div className="search-result__connective"> by </div>
            <div className="search-result__author">{result.author}</div>
        </div>
    )
}
