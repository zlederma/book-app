import React from 'react'
import "./AddBookButtonStyles.css"
import { FiPlus } from "react-icons/fi";

export default function AddBookButton() {
    return (
        <FiPlus className="add-book-button__button" strokeWidth="4" stroke="white" strokeLinecap="straight" />
    )
}
