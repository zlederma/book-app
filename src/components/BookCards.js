import React from 'react'
import BookCard from './BookCard'
import { useEffect } from 'react'
import { useWindowSize } from "../utils/window-size";
import './BookCardsStyles.css'
import { numBooks } from "../utils/num-books"

export default function BookCards(props) {
    const size = useWindowSize();
    const showBookCards = () => {
        let bookCards = [];
        if (props.data === undefined) {
            return <></>;
        }

        let len = props.data.length;
        if (props.limit !== undefined) {
            let maxBooks = numBooks(size.width, parseInt(props.limit));
            if (maxBooks < len) {
                len = maxBooks;
            }
        }
        for (let i = 0; i < len; i++) {
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
