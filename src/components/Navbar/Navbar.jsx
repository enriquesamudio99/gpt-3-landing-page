import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.scss';

import { images } from '../../constants';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <a className="navbar__brand" href="#">
                    <img src={images.logo} alt="Logo" className="navbar__brand-img" />
                </a>
                <div className="nav-container">
                    <ul className="nav">
                        <li className="nav__item">
                            <a className="nav__link" href="#">Home</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#">What is GPT?</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#">Open AI</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#">Case Studies</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#">Library</a>
                        </li>
                    </ul>
                    <ul className="nav-cta">
                        <li className="nav-cta__item">
                            <a className="nav-cta__link" href="#">Sign In</a>
                        </li>
                        <li className="nav-cta__item">
                            <a className="nav-cta__link nav-cta__link--sign-up" href="#">Sign Up</a>
                        </li>
                    </ul>
                </div>
                <button className="navbar__toggler">
                    {toggleMenu
                        ? <RiCloseLine className="navbar__toggler-icon" color="#FFF" size={28} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line className="navbar__toggler-icon" color="#FFF" size={28} onClick={() => setToggleMenu(true)} />
                    }
                </button>
                <div className={`mobile-menu-container ${toggleMenu ? "mobile-menu-container--open" : ""}`} >
                    <ul className="mobile-menu">
                        <li className="mobile-menu__item">
                            <a className="mobile-menu__link" href="#" onClick={() => setToggleMenu(false)}>Home</a>
                        </li>
                        <li className="mobile-menu__item">
                            <a className="mobile-menu__link" href="#" onClick={() => setToggleMenu(false)}>What is GPT?</a>
                        </li>
                        <li className="mobile-menu__item">
                            <a className="mobile-menu__link" href="#" onClick={() => setToggleMenu(false)}>Open AI</a>
                        </li>
                        <li className="mobile-menu__item">
                            <a className="mobile-menu__link" href="#" onClick={() => setToggleMenu(false)}>Case Studies</a>
                        </li>
                        <li className="mobile-menu__item">
                            <a className="mobile-menu__link" href="#" onClick={() => setToggleMenu(false)}>Library</a>
                        </li>
                    </ul>
                </div>      
            </div>
        </nav>
    );

}

export default Navbar;