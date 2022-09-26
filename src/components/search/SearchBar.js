import "./SearchBarStyles.css"
import SearchResults from "./SearchResults"
import { getBooks } from "../../utils/books-fetcher"
export default function SearchBar() {
    getBooks("flowers for alg");
    const handleChange = (event) => {
        console.log(event);
        console.log(event.target.value)
    }
    return (
        <>
            <div className="search-bar__container">
                <input className="search-bar__search" type="text" placeholder="Search for a book" onChange={handleChange} />
            </div>
            <SearchResults />
        </>
    )
}
