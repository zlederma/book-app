import "./SearchBarStyles.css"
import SearchResults from "./SearchResults"
import { Books } from "../../classes/Books"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { update } from '../../store/bookResultsSlice'
import { open, close } from '../../store/resultsStateSlice'

//Parent component
export default function SearchBar(props) {
    const books = new Books();
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()

    async function handleChange(event) {
        const query = event.target.value;
        if (query.length >= 3) {
            setIsLoading(true)
            const data = await books.getBooks(query);
            setResults(data);
            dispatch(open());
            setIsLoading(false)
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
            {!isLoading ? <SearchResults results={results} onClickOutside={() => dispatch(close())} /> : <></>}
        </>
    )
}
