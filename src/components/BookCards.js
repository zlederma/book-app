import React from 'react'
import BookCard from './BookCard'
import { useEffect } from 'react'
import './BookCardsStyles.css'

export default function BookCards(props) {
    const showBookCards = () => {
        let bookCards = [];
        if (props.data === undefined) {
            return <></>;
        }
        for (let i = 0; i < props.data.length; i++) {
            bookCards.push(<BookCard data={props.data[i]} key={i} button={props.button} />)
        }
        return bookCards;
    }

    useEffect(() => {
    }, [props.data]);
    return (
        <div className='book-cards__container'>
            {showBookCards()}
        </div>
    )
}
