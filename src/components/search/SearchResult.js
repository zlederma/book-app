import './SearchResultStyles.css'
import { getBooks } from "../../utils/books-fetcher"
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../../utils/bookResultsSlice'


export default function SearchResult(props) {
    const dispatch = useDispatch()
    const result = props.result;
    const query = `intitle:${result.title}+inauthor:${result.author}`;
    const handleClick = () => {
        getBooks(query).then(data => dispatch(update(data)));
    }
    return (
        <div className="search-result__container" onClick={() => handleClick()}>
            <div className="search-result__title">{result.title}</div>
            <div className="search-result__connective"> by </div>
            <div className="search-result__author">{result.author}</div>
        </div>
    )
}
