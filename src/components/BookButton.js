import React from 'react'
import "./BookButtonStyles.css"
import { FiPlus } from "react-icons/fi";

export default function BookButton(props) {
    return (
        <FiPlus className="book-button__button" strokeWidth="4" stroke="white" strokeLinecap="straight" />
    )
}
