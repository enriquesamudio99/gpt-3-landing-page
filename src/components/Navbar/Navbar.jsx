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
                            <a className="nav__link" href="#about">What is GPT?</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#features">Open AI</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#possibility">Possibilities</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#blog">Blog</a>
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
                <button className="navbar__open-menu">
                    <RiMenu3Line className="navbar__open-menu-icon" color="#FFF" size={28} onClick={() => setToggleMenu(true)} />
                </button>
                <div className={`mobile-menu ${toggleMenu ? "mobile-menu--open" : ""}`} >
                    <div className="mobile-menu__container container">
                        <button className="navbar__close-menu">
                            <RiCloseLine className="navbar__close-menu-icon" color="#FFF" size={28} onClick={() => setToggleMenu(false)} />
                        </button>
                        <ul className="mobile-menu__list">
                            <li className="mobile-menu__list-item">
                                <a className="mobile-menu__list-link" href="#" onClick={() => setToggleMenu(false)}>Home</a>
                            </li>
                            <li className="mobile-menu__list-item">
                                <a className="mobile-menu__list-link" href="#about" onClick={() => setToggleMenu(false)}>What is GPT?</a>
                            </li>
                            <li className="mobile-menu__list-item">
                                <a className="mobile-menu__list-link" href="#features" onClick={() => setToggleMenu(false)}>Open AI</a>
                            </li>
                            <li className="mobile-menu__list-item">
                                <a className="mobile-menu__list-link" href="#possibility" onClick={() => setToggleMenu(false)}>Possibilities</a>
                            </li>
                            <li className="mobile-menu__list-item">
                                <a className="mobile-menu__list-link" href="#blog" onClick={() => setToggleMenu(false)}>Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>      
            </div>
        </nav>
    );

}

export default Navbar;