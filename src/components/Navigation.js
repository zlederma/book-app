import "./NavigationStyles.css"
import SearchBar from "./SearchBar"
export default function Navigation() {
    return (
        <div class="navigation__container">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><SearchBar /></li>
                </ul>
            </nav>
        </div>
    )
}
