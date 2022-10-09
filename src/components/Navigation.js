import "./NavigationStyles.css";
import SearchBar from "./search/SearchBar";
import { GiHamburgerMenu, GiOpenBook } from "react-icons/gi";
import { useState, useEffect, useRef } from "react";
import { useWindowSize } from "../utils/window-size";

export default function Navigation(props) {
    const [navDisplay, setNavDisplay] = useState({});
    const size = useWindowSize();

    const ref = useRef(null);
    const { onClickOutside } = props;
    //listens for an outside click event
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
                if (JSON.stringify(navDisplay) !== '{}') {
                    setNavDisplay({});
                }
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [onClickOutside, navDisplay]);

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
            <div className="navigation__hamburger-container">
                <a className="navigation__hamburger" onClick={handleClick} ref={ref} ><GiHamburgerMenu stroke="white" strokeWidth="10" /></a>
                <div className="navigation__hamburger-search">
                    {size.width < 767 ? <SearchBar /> : <></>}</div>
            </div>
            <nav className="navigation__navigation" style={navDisplay}>
                <ul>
                    <li>
                        <a href="/">
                            <div className="navigation__home" >
                                <GiOpenBook />
                            </div>
                        </a>
                    </li>
                    <li><a href="/library">Library</a></li>
                    <li className="navigation__search"> {size.width >= 767 ? <SearchBar /> : <></>}</li>
                    <li><a href="/authentication">Sign in</a></li>
                </ul>
            </nav>
        </div>
    )
}
