import React from 'react'
import "./BookButtonStyles.css"
import { FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch } from 'react-redux'
import { add, remove } from '../utils/librarySlice'

export default function BookButton(props) {
    const dispatch = useDispatch()
    const plusClickHandler = () => {
        dispatch(add(props.data));
    }

    const minusClickHandler = () => {
        dispatch(remove(props.data));
    }

    if (props.button === "minus") {
        return (
            <FiMinus className="book-button__button" strokeWidth="4" stroke="white" strokeLinecap="straight" onClick={minusClickHandler} />
        )
    }
    else {
        return (
            <FiPlus className="book-button__button" strokeWidth="4" stroke="white" strokeLinecap="straight" onClick={plusClickHandler} />
        )
    }
}
