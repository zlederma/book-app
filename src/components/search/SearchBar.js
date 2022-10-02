import "./SearchBarStyles.css"
import SearchResults from "./SearchResults"
import { getBooks } from "../../utils/books-fetcher"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { update } from '../../utils/bookResultsSlice'
import { open, close } from '../../utils/resultsStateSlice'

//Parent component
export default function SearchBar(props) {
    const [results, setResults] = useState([]);
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const query = event.target.value;
        if (query.length >= 3) {
            dispatch(open())
            getBooks(query).then(data => setResults(data));
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            dispatch(close())
            dispatch(update(results))
        }
    }

    return (
        <>
            <div className="search-bar__container">
                <input className="search-bar__search" type="text" placeholder="Search for a book"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} />
            </div>
            <SearchResults results={results} />
        </>
    )
}
