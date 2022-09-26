import "./SearchBarStyles.css"
import SearchResults from "./SearchResults"
import { getBooks } from "../../utils/books-fetcher"
import { useState } from "react"

export default function SearchBar() {
    const [results, setResults] = useState([]);
    // getBooks("flowers for alg").then(data => console.log(data));
    const handleChange = (event) => {
        const query = event.target.value;
        if (query.length >= 3) {
            getBooks(query).then(data => setResults(data));
        }
    }
    const handleKeyDown = (event) => {
    }
    console.log(results);
    //On key down===enter is when we want to hide the searchbar and render the cards. 
    return (
        <>
            <div className="search-bar__container">
                <input className="search-bar__search" type="text" placeholder="Search for a book" onChange={handleChange} onKeyDown={handleKeyDown} />
            </div>
            <SearchResults />
        </>
    )
}
