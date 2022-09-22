import { data } from "../mock-book-data";
import "./BookCardStyles.css"
import AddBookButton from "./AddBookButton";
export default function BookCard() {
    return (
        <div className="book-card__container">
            <AddBookButton />
            <div className="book-card__image-container">
                <img src={data.image} alt="hi" />
            </div>
            <div className="book-card__details-container">
                <div className="book-card__title">{data.title}</div>
                <div className="book-card__author">{data.author}</div>
            </div>
        </div>
    )
}
