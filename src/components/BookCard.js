import { data } from "../mock-book-data";
import "./BookCardStyles.css"
import BookButton from "./BookButton";
export default function BookCard(props) {
    return (
        <div className="book-card__container">
            <div className="book-card__image-container">
                <img src={props.data.image} aria-hidden="true" />
            </div>
            <div className="book-card__button-container">
                <BookButton button={props.button} data={props.data} />
            </div>
            <div className="book-card__details-container">
                <div className="book-card__title">{props.data.title}</div>
                <div className="book-card__author">{props.data.author}</div>
            </div>
        </div>
    )
}
