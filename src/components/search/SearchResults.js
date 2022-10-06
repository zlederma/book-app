import './SearchResultsStyles.css'
import SearchResult from './SearchResult'
import React from 'react'
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'

export default function SearchResults(props) {

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

    const ref = useRef(null);
    const { onClickOutside } = props;
    //listens for an outside click event
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [onClickOutside]);

    const resultsState = useSelector((state) => state.resultsState.value)
    useEffect(() => {
    }, [props.results, resultsState]);


    return (
        resultsState ?
            <div ref={ref} className="search-results__container">
                {showResults()}
            </div> : <></>
    )
}
