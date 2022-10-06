import "./SearchBarStyles.css"
import SearchResults from "./SearchResults"
import { getBooks } from "../../utils/books-fetcher"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { update } from '../../utils/bookResultsSlice'
import { open, close } from '../../utils/resultsStateSlice'

//Parent component
export default function SearchBar(props) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setQuery(event.target.value);
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

    const handleClick = () => {
        if (query.length >= 3) {
            dispatch(open())
        }
    }

    return (
        <>
            <div className="search-bar__container">
                <input className="search-bar__search" type="text" placeholder="Search for a book"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onClick={handleClick} />
            </div>
            <SearchResults results={results} onClickOutside={() => dispatch(close())} />
        </>
    )
}
