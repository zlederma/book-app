import React from 'react'
import "./BookButtonStyles.css"
import { FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch } from 'react-redux'
import { add, remove } from '../store/librarySlice'
import { useState } from 'react';

export default function BookButton(props) {
    const [button, setButton] = useState(props.button);
    const dispatch = useDispatch()
    const plusClickHandler = () => {
        setButton("minus")
        dispatch(add(props.data));
    }

    const minusClickHandler = () => {
        setButton("plus")
        dispatch(remove(props.data));
        console.log("clicked")
    }

    if (button === "minus") {
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
