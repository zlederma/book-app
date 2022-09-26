import "./NavigationStyles.css";
import SearchBar from "./search/SearchBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navigation() {
    const [navDisplay, setNavDisplay] = useState({});
    const handleClick = () => {
        if (JSON.stringify(navDisplay) === '{}') {
            setNavDisplay({ display: "block" });
        }
        else {
            setNavDisplay({});
        }
    }
    return (
        <div className="navigation__container">
            <div className="navigation__hamburger-container" onClick={handleClick}>
                <a className="navigation__hamburger"><GiHamburgerMenu stroke="white" strokeWidth="10" /></a>
                <div className="navigation__hamburger-search"><SearchBar /></div>
            </div>
            <nav className="navigation__navigation" style={navDisplay}>
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
