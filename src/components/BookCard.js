import { data } from "../mock-book-data";
import "./BookCardStyles.css"
import image from "../assets/mock-book-card-image.jpg"
export default function BookCard() {
    return (
        <div className="container">
            <img src={data.image} alt="hi" />
            <div>{data.title}</div>
            <div>{data.author}</div>
        </div>
    )
}
