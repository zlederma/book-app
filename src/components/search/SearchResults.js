import './SearchResultsStyles.css'
import SearchResult from './SearchResult'
import React from 'react'

export default function SearchResults() {
    return (
        <div className="search-results__container">
            <SearchResult />
            <SearchResult />
            <SearchResult />
        </div>
    )
}
