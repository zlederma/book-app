import './SearchResultsStyles.css'
import SearchResult from './SearchResult'
import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

export default function SearchResults(props) {
    const state = useSelector((state) => state.resultsState.value)
    useEffect(() => {
    }, [props.results, state]);

    const showResults = () => {
        let resultsList = [];
        if (props.results === undefined) {
            return <></>;
        }
        for (let i = 0; i < props.results.length; i++) {
            resultsList.push(<SearchResult result={props.results[i]} key={i} />)
        }
        return resultsList;
    }

    return (
        state ?
            <div className="search-results__container">
                {showResults()}
            </div> : <></>
    )
}
