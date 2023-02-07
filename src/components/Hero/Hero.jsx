import './Hero.scss';

import { images } from '../../constants';
 
const Hero = () => {

    return (
        <div className="hero">
            <div className="hero__container">
                <div className="hero__info">
                    <h1 className="hero__title">Let’s Build Something Amazing with GPT-3 OpenAI</h1>
                    <p className="hero__text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <form className="form hero__form" >
                        <div className="form__container">
                            <input type="email" className="form__input" placeholder="Your Email Address" />
                            <button type="submit" className="form__btn">
                                Get Started
                            </button>
                        </div>
                    </form>
                    <div className="hero__people">
                        <img src={images.people} alt="People Image" className="hero__people-img" />
                        <span className="hero__people-text">1,600 people requested access a visit in last 24 hours</span>
                    </div>
                </div>
                <div className="hero__image">
                    <div className="hero__image-gradient"></div>
                    <img src={images.heroIllustration} alt="Hero Illustration" className="hero__illustration" />
                </div>
            </div>
        </div>
    );

}

export default Hero;