import './SearchResultsStyles.css'
import SearchResult from './SearchResult'
import React from 'react'
import { useState, useEffect } from 'react';

export default function SearchResults(props) {
    const [results, setResults] = useState([]);
    useEffect(() => {
        setResults(props.results);
    }, [props.results]);

    const showResults = () => {
        let resultsList = [];
        if (results === undefined) {
            return <></>;
        }
        for (let i = 0; i < results.length; i++) {
            resultsList.push(<SearchResult result={results[i]} key={i} />)
        }
        return resultsList;
    }
    return (
        <div className="search-results__container">
            {showResults()}
        </div>
    )
}
