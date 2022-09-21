import { data } from "../mock-book-data";
import "./BookCardStyles.css"
import image from "../assets/mock-book-card-image.jpg"
export default function BookCard() {
    return (
        <div className="container">
            <div className="image-container">
                <img src={data.image} alt="hi" />
            </div>
            <div className="details-container">
                <div className="title">{data.title}</div>
                <div className="author">{data.author}</div>
            </div>
        </div>
    )
}
