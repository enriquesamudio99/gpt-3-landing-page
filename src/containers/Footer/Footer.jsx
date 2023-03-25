import './Footer.scss';

import { images } from '../../constants';

const Footer = () => {
    
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__content">
                    <h2 className="footer__title">Do you want to step in to the future before others</h2>
                    <a href="#cta" className="footer__btn">Request Early Access</a>
                </div>

                <div className="footer__grid">
                    <div className="footer__info">
                        <a className="footer__brand" href="#">
                            <img src={images.logo} alt="Logo" className="footer__brand-img" />
                        </a>
                        <p className="footer__info-text">Crechterwoord K12 182 DK <br />Alknjkcb, All Rights Reserved</p>
                    </div>
                    <div className="footer__links">
                        <div className="footer__links-box">
                            <h3 className="footer__links-title">Links</h3>
                            <a href="#" className="footer__link">Overons</a>
                            <a href="#" className="footer__link">Social Media</a>
                            <a href="#" className="footer__link">Counters</a>
                            <a href="#" className="footer__link">Contact</a>
                        </div>
                        <div className="footer__links-box">
                            <h3 className="footer__links-title">Company</h3>
                            <a href="#" className="footer__link">Terms & Condition</a>
                            <a href="#" className="footer__link">Privacy Policy</a>
                            <a href="#" className="footer__link">Contact</a>
                        </div>
                        <div className="footer__links-box">
                            <h3 className="footer__links-title">Get In Touch</h3>
                            <a href="#" className="footer__link">Crechterwoord K12 <br/>182 DK Alknjkcb</a>
                            <a href="#" className="footer__link">085-132567</a>
                            <a href="#" className="footer__link">info@payme.net</a>
                        </div>
                    </div>
                </div>

                <p className="footer__copy">© 2022 GPT-3. All rights reserved.</p>
            </div>
        </footer>        
    );

}

export default Footer;