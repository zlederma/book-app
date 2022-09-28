import { createPortal } from "react-dom"
import "./SearchBarStyles.css"
import SearchResults from "./SearchResults"
import { getBooks } from "../../utils/books-fetcher"
import { useState, useEffect } from "react"
import BookCards from '../BookCards'

export default function SearchBar(props) {
    const [results, setResults] = useState([]);
    const [closeResults, setCloseResults] = useState(false);
    const handleChange = (event) => {
        const query = event.target.value;
        if (query.length >= 3) {
            getBooks(query).then(data => setResults(data));
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setCloseResults(true);
        }
        else {
            setCloseResults(false);
        }
    }

    const books = <BookCards data={results} />

    return (
        <>
            <div className="search-bar__container">
                <input className="search-bar__search" type="text" placeholder="Search for a book"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} />
            </div>
            {!closeResults ? <SearchResults results={results} /> : <></>}
            {/* Kinda working but creates two versions because there are two search bar componenets */}
            {closeResults ? createPortal(<BookCards data={results} />, document.querySelector(".main__container")) : <></>}
        </>
    )
}
