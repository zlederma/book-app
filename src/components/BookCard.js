import React from 'react';
import data from "../mock-book-data.json";
import "./BookCardStyles.css"
export default function BookCard() {
    return (
        <div className="container">
            <img src={data.image} alt="hi" />
            <div>{data.title}</div>
            <div>{data.author}</div>
        </div>
    )
}
