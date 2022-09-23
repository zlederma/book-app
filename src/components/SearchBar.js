import "./SearchBarStyles.css"
import { useState } from "react";
import { results } from "../mock-book-data"
export default function SearchBar() {
    // const [resultWidth, setResultWidth] = useState(0);
    // let resultWidth = document.querySelector(".search-bar__container").offsetWidth;
    // console.log(resultWidth);
    return (
        <>
            <div className="search-bar__container">
                <input className="search-bar__search" type="text" placeholder="Search for a book" />
            </div>
            <div className="search-bar__results-container">
                <div className="search-bar__result-container">
                    <div className="search-bar__result-title">{results[0].title}</div>
                    <div className="search-bar__result-connective"> by </div>
                    <div className="search-bar__result-author">{results[0].author}</div>
                </div>
                <div className="search-bar__result-container">
                    <div className="search-bar__result-title">{results[1].title}</div>
                    <div className="search-bar__result-connective"> by </div>
                    <div className="search-bar__result-author">{results[1].author}</div>
                </div>
                <div className="search-bar__result-container">
                    <div className="search-bar__result-title">{results[1].title}</div>
                    <div className="search-bar__result-connective"> by </div>
                    <div className="search-bar__result-author">{results[1].author}</div>
                </div>
            </div>
        </>
    )
}
