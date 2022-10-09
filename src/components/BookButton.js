import React from 'react'
import { useState, useEffect } from 'react';
import "./BookButtonStyles.css"
import { FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch } from 'react-redux'
import { add, remove } from '../utils/librarySlice'

export default function BookButton(props) {
    const dispatch = useDispatch()
    const [button, setButton] = useState(props.button);
    const plusClickHandler = () => {
        dispatch(add(props.data));
        setButton("minus");
    }

    const minusClickHandler = () => {
        dispatch(remove(props.data));
        setButton("plus");
    }

    if (button === "minus") {
        return (
            <FiMinus className="book-button__button" strokeWidth="4" stroke="white" strokeLinecap="straight" onClick={minusClickHandler} />
        )
    }

    return (
        <FiPlus className="book-button__button" strokeWidth="4" stroke="white" strokeLinecap="straight" onClick={plusClickHandler} />
    )
}
