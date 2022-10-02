import { createPortal } from "react-dom"
import "./SearchBarStyles.css"
import SearchResults from "./SearchResults"
import { getBooks } from "../../utils/books-fetcher"
import { useState } from "react"
import BookCards from '../BookCards'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../../utils/bookResultsSlice'

export default function SearchBar(props) {
    const [results, setResults] = useState([]);
    const [closeResults, setCloseResults] = useState(false);

    const bookResults = useSelector((state) => state.bookResults.value)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        const query = event.target.value;
        if (query.length >= 3) {
            getBooks(query).then(data => setResults(data));
            dispatch(update(results))
            console.log(bookResults);
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

    return (
        <>
            <div className="search-bar__container">
                <input className="search-bar__search" type="text" placeholder="Search for a book"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} />
            </div>
            {!closeResults ? <SearchResults results={results} /> : <></>}
            {closeResults ? createPortal(<BookCards data={results} />, document.querySelector(".main__container")) : <></>}
        </>
    )
}
