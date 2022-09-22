import "./NavigationStyles.css"
import SearchBar from "./SearchBar"
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navigation() {
    return (
        <div className="navigation__container">
            <a className="navigation__hamburger"><GiHamburgerMenu /></a>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Books</a></li>
                    <li className="navigation__search"><SearchBar /></li>
                    <li><a href="#">Sign out</a></li>
                </ul>
            </nav>
        </div>
    )
}
