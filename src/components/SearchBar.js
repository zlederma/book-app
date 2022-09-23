import "./SearchBarStyles.css"
import { results } from "../mock-book-data"
export default function SearchBar() {
    return (
        <>
            <div className="search-bar__container">
                <input className="search-bar__search" type="text" placeholder="Search for a book" />
            </div>
            <div className="search-bar__result-container">
                <div className="search-bar__result-title">{results[0].title} by</div>
                <div className="search-bar__result-author">{results[0].author}</div>
            </div>
        </>
    )
}
