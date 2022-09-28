import React from 'react'
import BookCard from './BookCard'
import './BookCardsStyles.css'

export default function BookCards(props) {
    const showBookCards = () => {
        let bookCards = [];
        if (props.data === undefined) {
            return <></>;
        }
        for (let i = 0; i < props.data.length; i++) {
            bookCards.push(<BookCard data={props.data[i]} />)
        }
        return bookCards;
    }
    return (
        <div className='book-cards__container'>
            {showBookCards()}
        </div>
    )
}
