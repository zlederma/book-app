import "./SearchBarStyles.css"
import SearchResults from "./SearchResults"
export default function SearchBar() {
    return (
        <>
            <div className="search-bar__container">
                <input className="search-bar__search" type="text" placeholder="Search for a book" />
            </div>
            <SearchResults />
        </>
    )
}
