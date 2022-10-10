import './SearchResultStyles.css'
import { useDispatch } from 'react-redux'
import { update } from '../../store/bookResultsSlice'
import { close } from '../../store/resultsStateSlice'
import { Books } from "../../classes/Books"


export default function SearchResult(props) {
    const books = new Books();
    const dispatch = useDispatch()
    const result = props.result;
    const query = `intitle:${result.title}+inauthor:${result.author}`;
    async function handleClick() {
        let data = await books.getBooks(query);
        dispatch(update(data))
        dispatch(close());
    }
    return (
        <div className="search-result__container" onClick={() => handleClick()}>
            <div className="search-result__title">{result.title}</div>
            <div className="search-result__connective"> by </div>
            <div className="search-result__author">{result.author}</div>
        </div>
    )
}
