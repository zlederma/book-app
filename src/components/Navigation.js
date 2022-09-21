import "./NavigationStyles.css"
import SearchBar from "./SearchBar"
export default function Navigation() {
    return (
        <div class="navigation__container">
            <nav>
                <ul>
                    <div className="navigation__pages">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Books</a></li>
                        <li><a href="#">Profile</a></li>
                    </div>
                    <div className="navigation__search">
                        <li><SearchBar /></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}
