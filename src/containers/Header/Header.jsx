import './Header.scss';

import { Companies, Hero, Navbar } from '../../components';

const Header = () => {

    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__gradient header__gradient--one"></div>
                <Navbar />
                <Hero />
                <Companies />
                <div className="header__gradient header__gradient--two"></div>
            </div>
        </header>
    );

}

export default Header;