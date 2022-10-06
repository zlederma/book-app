import React from 'react'
import './MainStyles.css'
import { useSelector, useDispatch } from 'react-redux'
import BookCards from './BookCards'

export default function Main() {
    const bookResults = useSelector((state) => state.bookResults.value)
    const library = useSelector((state) => state.library.value)
    return (
        <div className='main__container'>
            <BookCards data={bookResults} />
            <BookCards data={library} />
        </div>
    )
}
