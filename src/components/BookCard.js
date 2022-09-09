import React from 'react';
import data from "../mock-book-data.json";
import image from "../assets/mock-book-card-image.jpg"
export default function BookCard() {
    return (
        <div>
            <div>{data.title}</div>
            <img src={image} alt="hi" />
        </div>
    )
}
